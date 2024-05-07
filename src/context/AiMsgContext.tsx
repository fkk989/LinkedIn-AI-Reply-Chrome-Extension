import React, { createContext, useContext, useRef, useState } from "react"

// Define the type for the context value
interface AiMsgContextType {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  prompt: string
  setPrompt: React.Dispatch<React.SetStateAction<string>>
  regenerate: boolean
  setRegenerate: React.Dispatch<React.SetStateAction<boolean>>
  response: string
  setResponse: React.Dispatch<React.SetStateAction<string>>
  inputElement: HTMLElement
  setInputElement: React.Dispatch<React.SetStateAction<HTMLElement>>
  textContainer: React.MutableRefObject<HTMLDivElement>
  promptInput: React.MutableRefObject<HTMLInputElement>
  closeModal: () => void
  handleOpenModal: () => void
}

// Creating a context for the open state
const AiMsgContext = createContext<AiMsgContextType | undefined>(undefined)

// Custom hook to consume the AiMsgContext
export const useAiMsgContext = (): AiMsgContextType => {
  const context = useContext(AiMsgContext)
  if (!context) {
    throw new Error("useAiMsg must be used within an AiMsgProvider")
  }
  return context
}

// Provider component to wrap your app and manage the open state
export const AiMsgProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [openModal, setOpenModal] = useState(false)
  const [response, setResponse] = useState("")
  const [prompt, setPrompt] = useState("")
  const [regenerate, setRegenerate] = useState(false)
  const [inputElement, setInputElement] = useState<HTMLElement | null>(null)

  // ref
  const promptInput = useRef<HTMLInputElement | null>(null)
  const textContainer = useRef<HTMLDivElement | null>(null)

  function closeModal() {
    setPrompt("")
    setRegenerate(false),
      (textContainer.current.innerHTML = ""),
      setOpenModal(false)
  }
  function handleOpenModal() {
    setOpenModal(true)
    promptInput.current.focus()
  }

  return (
    <AiMsgContext.Provider
      value={{
        closeModal,
        handleOpenModal,
        promptInput,
        inputElement,
        setInputElement,
        prompt,
        setPrompt,
        regenerate,
        setRegenerate,
        openModal,
        setOpenModal,
        response,
        setResponse,
        textContainer
      }}>
      {children}
    </AiMsgContext.Provider>
  )
}
