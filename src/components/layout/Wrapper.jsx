import React from 'react'
import cn from 'classnames'

export default function Wrapper({ children, className, isFat = false, isSecondary = false }) {
  return (
    <div className={cn('px-6 lg:px-0', className, {
      'py-10': !isFat,
      'py-20': isFat,
      'bg-secondary': isSecondary,
    })}>
      {children}
    </div>
  )
}