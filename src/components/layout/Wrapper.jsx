import React from 'react'
import cn from 'classnames'

export default function Wrapper({ children, className, isFat = false, isSecondary = false, isDark = false }) {
  return (
    <section className={cn('px-6 lg:px-10 xl:px-0', className, {
      'py-10': !isFat,
      'py-20': isFat,
      'bg-secondary': isSecondary,
      'bg-dark': isDark,
    })}>
      {children}
    </section>
  )
}