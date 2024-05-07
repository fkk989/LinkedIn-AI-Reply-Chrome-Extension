// might create a keypress feature in future
/*
import { useEffect } from "react"

export const useKeypress = ({
  key,
  cb,
  deps
}: {
  key: string
  cb: () => void
  deps?: any[]
}) => {
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (key && e.key === key) {
        console.log("right key is pressed ")
        cb()
        return
      }
      if (!key) {
        cb()
      }
    })
  }, deps)
}

*/
