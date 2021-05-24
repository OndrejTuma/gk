import React from 'react'
import cn from 'classnames'

export default function Container ({ className, children }) {
  return (
    <div className={cn(className, 'max-w-screen-lg mx-auto')}>
      {children}
    </div>
  )
}