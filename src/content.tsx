import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { createPortal } from "react-dom"

import { AiMsgProvider } from "~context"
import { AiMsgReplier } from "~features/AiMsgReplier"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-32 right-8">
      <AiMsgProvider>
        <AiMsgReplier />
      </AiMsgProvider>
    </div>
  )
}

export default PlasmoOverlay
