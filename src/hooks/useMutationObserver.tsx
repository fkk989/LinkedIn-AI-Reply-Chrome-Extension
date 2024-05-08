import { useEffect } from "react"

// Mutation ovserver to look changes in the ref element
interface MutationObserverProp {
  ref?: HTMLElement
  callback: MutationCallback
  options?: {
    characterDataOldValue?: MutationObserverInit["characterDataOldValue"]
    attributeOldValue?: MutationObserverInit["attributeOldValue"]
    attributeFilter?: MutationObserverInit["attributeFilter"]
    attributes?: MutationObserverInit["attributes"]
    characterData?: MutationObserverInit["characterData"]
    childList?: MutationObserverInit["childList"]
    subtree?: MutationObserverInit["subtree"]
  }
  deps?: any[]
}
export const useMutationObserver = ({
  ref,
  callback,
  options,
  deps
}: MutationObserverProp) => {
  useEffect(() => {
    if (ref) {
      const observer = new MutationObserver(callback)
      observer.observe(ref, options)
      return () => observer.disconnect()
    }
  }, [callback, options, ...deps])
}
