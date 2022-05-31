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
        ` ${buttonWidth}  rounded-full bg-gray-50  px-9 py-4 text-center font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-2xl active:scale-90 sm:invisible lg:visible`
      )}
    >
      {buttonText}
    </button>
  )
}

export default MainFuctionButton
