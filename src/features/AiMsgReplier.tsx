import { useCallback, useEffect, useState } from "react"

import { Modal, Prompt } from "~components"
import { useAiMsgContext } from "~context"
import { useMutationObserver } from "~hooks"
import { insertBtnIntoInput } from "~lib/helpers"

export const AiMsgReplier = () => {
  const { openModal, setOpenModal, closeModal, handleOpenModal } =
    useAiMsgContext()

  const [mutationObserverRef, setMutationObserverRef] =
    useState<HTMLElement | null>(null)

  // setter function for mutation Ref
  function mutationRefSetter() {
    if (!mutationObserverRef) {
      const elemnt = document.querySelector(
        ".msg-convo-wrapper "
      ) as HTMLElement
      setMutationObserverRef(elemnt)
    }
  }

  // callback for mutation observer
  function mutationCallback(entries: MutationRecord[]) {
    const getInputElement = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLInputElement
    insertBtnIntoInput({ handleOpenModal, inputElement: getInputElement })
  }
  useMutationObserver({
    ref: mutationObserverRef,
    callback: mutationCallback,
    options: {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
    },
    deps: [mutationObserverRef]
  })

  useEffect(() => {
    window.addEventListener("click", mutationRefSetter)
    return () => {
      window.removeEventListener("click", mutationRefSetter)
    }
  }, [])

  return (
    <div>
      <div className="fixed top-0 left-0">
        <Modal open={openModal} setOpen={setOpenModal} closeModal={closeModal}>
          <Prompt />
        </Modal>
      </div>
    </div>
  )
}
