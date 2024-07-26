import { Tooltip } from "react-tooltip"

import IconQuestionmark from "./IconQuestionmark"
import IconInfo from "./IconInfo"

const InfoBox = ({ id, type, place, children }) => {
  return (
    <span className="whitespace-nowrap text-xl w-16">
      <Tooltip
        id={id}
        place={place}
        clickable
        className="
          !bg-[lime]
          !opacity-100 
          !text-black
          !w-[calc(100vw-1rem)]
          !max-w-2xl
          !p-10
          !whitespace-normal
          z-50
        "
      >
        {children}
      </Tooltip>
      <a
        data-tooltip-id={id}
        className="w-16"
      >
        {type === "question" ? <IconQuestionmark /> : <IconInfo />}
      </a>
    </span>
  )
}

export default InfoBox
