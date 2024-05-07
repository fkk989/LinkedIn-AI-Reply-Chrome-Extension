import React from "react"

import { useAiMsgContext } from "~context"
import { handleGenerate } from "~lib/helpers"

import { GenerateBtn } from "./GenerateBtn"
import { RegenerateBtn } from "./RegenerateBtn"

export const Prompt = () => {
  const {
    textContainer,
    setResponse,
    prompt,
    setPrompt,
    setRegenerate,
    regenerate,
    promptInput
  } = useAiMsgContext()

  return (
    <div className="w-[700px]  flex flex-col gap-[20px] bg-[#F9FAFB] rounded-lg p-[20px]">
      {/* text-container */}
      <div
        ref={textContainer}
        id="chatgpt-writer-ai-message-container"
        className="w-[97%] max-h-[70vh] flex flex-col gap-[20px] overflow-scroll"></div>

      <div className="w-[97%] flex flex-col justify-between gap-[10px]">
        {/* input */}
        <input
          ref={promptInput}
          value={prompt}
          onChange={(e) => {
            const value = e.target.value
            setPrompt(value)
          }}
          type="text"
          className="w-[100%] h-[40px] outline-none border-[1px] border-[#B7BDC6] placeholder:text-[#B7BDC6] text-[#676D80] text-[20px] box-border pl-[10px] pr-[10px] rounded-md"
          placeholder="Your Prompt"
        />
        {/* btns */}
        <div className="text-white w-[100%] flex items-center justify-end">
          {!regenerate ? (
            <div
              onClick={() => {
                handleGenerate({
                  prompt,
                  setPrompt,
                  setRegenerate,
                  setResponse,
                  textContainer: textContainer.current
                })
              }}>
              <GenerateBtn />
            </div>
          ) : (
            <div>
              <RegenerateBtn />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
