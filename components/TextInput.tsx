import React from 'react'
import classnames from 'classnames'
export default function TextInput({
  placeHolder,
  widthPercentage,
  onChange,
}: //   text,
//   value,
{
  placeHolder: string
  widthPercentage: any
  onChange: any
  //   text: string
  //   value: any
}) {
  return (
    <div className=" my-2 flex w-full items-center justify-center ">
      <input
        placeholder={placeHolder}
        className={classnames(
          `${widthPercentage} select-none rounded-[30px] border-2 border-[#7B3AF5] p-4 text-lg outline-none`
        )}
        onChange={onChange}
        // value={value}
      />
    </div>
  )
}
