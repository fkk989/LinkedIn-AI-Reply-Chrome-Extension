export const insertTextToInput = (text: string) => {
  const inputElement = document.querySelector(".msg-form__contenteditable")
  const pTag = inputElement.querySelector("p")

  // removing placeholder
  document
    .querySelector(".msg-form__placeholder")
    .classList.remove("msg-form__placeholder")

  pTag.innerHTML = ""
  pTag.innerHTML = text
}
