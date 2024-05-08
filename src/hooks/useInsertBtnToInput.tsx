import { createAiBtn } from "~lib"

function handleOutsideClick({
  inputElement,
  aiBtn
}: {
  inputElement: HTMLElement
  aiBtn: HTMLElement
}) {
  return (e: Event) => {
    if (!inputElement) return

    // hiding aiBtn wheneven clcick outside of the input element
    const p = inputElement.querySelector("p")

    if (e.target === inputElement || e.target === p) {
      aiBtn.style.display = "flex"
      aiBtn.style.justifyContent = "center"
      aiBtn.style.alignItems = "center"
    } else {
      aiBtn.style.display = "none"
    }
  }
}

export const useInsertBtnToInput = ({
  handleOpenModal,
  inputElement
}: {
  handleOpenModal: () => void
  inputElement: HTMLElement
}) => {
  const isAiBtn = document.getElementById("chatgpt-writer-linkedIn-ai-btn")
  if (isAiBtn) return

  let inputElem = inputElement
  // just reconfirming that we have input element
  if (!inputElem) {
    inputElem = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLElement
  }

  const { aiBtn } = createAiBtn()

  aiBtn.addEventListener("click", () => {
    handleOpenModal()
  })
  inputElem?.appendChild(aiBtn)

  // adding event listner to shoe btn in input box is clicked
  const handleClick = handleOutsideClick({ inputElement: inputElem, aiBtn })
  window.addEventListener("click", handleClick)
}
