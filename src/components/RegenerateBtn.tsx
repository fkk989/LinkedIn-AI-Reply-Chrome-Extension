import React from "react"
import { GoArrowDown } from "react-icons/go"
import { SlRefresh } from "react-icons/sl"

import { useAiMsgContext } from "~context"
import { insertTextToInput } from "~lib/helpers"

export const RegenerateBtn = () => {
  const { response, closeModal } = useAiMsgContext()

  return (
    <div className="flex items-center justify-center gap-[10px]">
      <div
        onClick={() => {
          closeModal()
          insertTextToInput(response)
        }}
        className="w-[100px] h-[35px] text-[#676D80] flex items-center justify-center gap-[5px] border-[2px] border-[#676D80] rounded-lg cursor-pointer">
        <GoArrowDown className="text-[22px]" />
        <span className="tracking-wide font-bold text-[14px] ">Insert</span>
      </div>
      <div className="w-[130px] h-[35px] flex items-center justify-center gap-[5px] bg-[#3B82F6] rounded-lg cursor-pointer">
        <SlRefresh className="text-[22px]" />
        <span className="tracking-wide font-bold text-[14px]">Regenerate</span>
      </div>
    </div>
  )
}
