import React from 'react'
import cn from 'classnames'

export default function Heading({ as, children, className, level = 2, ribbon }) {
  const Component = as || `h${level}`

  return (
    <Component className={cn('font-primary leading-none', className, {
      'text-3xl': level === 1,
      'text-2xl': level === 2,
      'text-xl': level === 3,
    })}>
      {children}
      {ribbon}
    </Component>
  )
}