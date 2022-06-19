import classnames from 'classnames'
import React from 'react'

function MainFuctionButton({
  onClick,
  buttonText,
  buttonWidth,
}: {
  onClick: any
  buttonText: string
  buttonWidth?: any
}) {
  return (
    <button
      onClick={onClick}
      className={classnames(
        ` ${buttonWidth} rounded-full bg-gray-50 py-2 px-4 text-center  text-xs font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90 sm:text-base md:px-9 md:py-4 `
      )}
    >
      {buttonText}
    </button>
  )
}

export default MainFuctionButton
