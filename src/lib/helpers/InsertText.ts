export const insertText = ({
  text,
  type,
  textContainer
}: {
  text: string
  type: "prompt" | "response"
  textContainer: HTMLDivElement
}) => {
  const textDiv = document.createElement("div")
  textDiv.style.display = "flex"
  textDiv.style.width = "100%"

  const textNode = document.createElement("div")
  textNode.style.maxWidth = "80%"
  textNode.style.color = "#676D80"
  textNode.style.fontSize = "20px"
  textNode.style.padding = "5px"
  textNode.style.borderRadius = "8px"
  textNode.innerHTML = text

  if (type === "prompt") {
    textDiv.style.justifyContent = "end"
    textNode.style.backgroundColor = "#E0E1E7"
  } else {
    textDiv.style.justifyContent = "start"
    textNode.style.backgroundColor = "#DBEAFE"
  }

  textDiv.appendChild(textNode)
  textContainer.appendChild(textDiv)
}
