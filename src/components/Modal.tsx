import React, { useRef } from "react"

interface ModalProp {
  open: boolean
  setOpen: any
  children: React.ReactNode
  closeModal: () => void
}
export const Modal: React.FC<ModalProp> = ({ open, children, closeModal }) => {
  const modalComponent = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`${!open ? "scale0 overflow-hidden" : "w-screen h-screen"} relative`}>
      <div
        className="absolute top-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] z-[1] cursor-pointer"
        onClick={() => {
          closeModal()
        }}></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center z-[2]">
        <div ref={modalComponent}>{children}</div>
      </div>
    </div>
  )
}
