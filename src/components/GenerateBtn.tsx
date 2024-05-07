import React from "react"
import { GoPaperAirplane } from "react-icons/go"

export const GenerateBtn = () => {
  return (
    <div className="w-[130px] h-[35px] flex items-center justify-center gap-[5px] bg-[#3B82F6] rounded-lg cursor-pointer">
      <GoPaperAirplane className="text-[22px]" />
      <span className="tracking-wide font-bold text-[14px]">Generate</span>
    </div>
  )
}
