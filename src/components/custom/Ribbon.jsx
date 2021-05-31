import React from 'react'
import cn from 'classnames'

export default function Ribbon({ className, isWhite, level = 1 }) {
  return (
    <div className={cn(className, 'w-full box-content', {
      'h-10 -mt-8': level === 1,
      'h-8 -mt-6': level === 2,
      'bg-white': isWhite,
      'bg-secondary': !isWhite,
    })}/>
  )
}