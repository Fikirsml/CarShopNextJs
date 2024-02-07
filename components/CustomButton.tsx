'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title,containerStyles,btnType,handleClick}:CustomButtonProps) => {
  return (
<button 
disabled={false}
type={btnType || 'button'}
className={`btn btn-primary ${containerStyles}`}
onClick={handleClick }
>
      <span className={`flex-1`}>
         {title}
      </span>
    </button>
  )
}

export default CustomButton
