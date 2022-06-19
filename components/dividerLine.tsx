import React from 'react'
import classnames from 'classnames'
const DividerLine: React.FC<{ width: any }> = (width) => {
  return (
    <div
      className={classnames(` rounded-[30px] ${width} h-[8px] bg-[#7026f8ae]`)}
    ></div>
  )
}
export default DividerLine
