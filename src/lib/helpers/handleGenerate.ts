import type { SetStateAction } from "react"

import { insertText } from "./InsertText"

interface Prop {
  setPrompt: React.Dispatch<SetStateAction<string>>
  prompt: string
  setRegenerate: React.Dispatch<SetStateAction<boolean>>
  setResponse: React.Dispatch<SetStateAction<string>>
  textContainer: HTMLDivElement
}
export const handleGenerate = ({
  setPrompt,
  prompt,
  setRegenerate,
  textContainer,
  setResponse
}: Prop) => {
  setPrompt("")
  setRegenerate(true)
  insertText({
    text: prompt,
    type: "prompt",
    textContainer
  })

  setTimeout(() => {
    const responseText =
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."

    setResponse(responseText)
    insertText({
      text: responseText,
      type: "response",
      textContainer: textContainer
    })
  }, 1000)
}
