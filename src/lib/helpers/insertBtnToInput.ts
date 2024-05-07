import type { SetStateAction } from "react"

import { useInsertBtnToInput } from "~hooks"

export function insertBtnIntoInput({
  handleOpenModal,
  inputElement
}: {
  handleOpenModal: () => void
  inputElement: HTMLElement
}) {
  useInsertBtnToInput({
    inputElement,
    handleOpenModal
  })
}
