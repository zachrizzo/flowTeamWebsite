import React from 'react'

export const ListItem: React.FC<{ MainText: String; SubText: string }> = (
  MainText,
  SubText
) => {
  return (
    <div className=" bg-[#a3a3a3]">
      <h2>{MainText}</h2>
      <h3>{SubText}</h3>
    </div>
  )
}
