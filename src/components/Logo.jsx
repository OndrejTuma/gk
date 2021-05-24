import React from 'react'
import cn from 'classnames'

import LogoIcon from '@icons/logo.svg'

export default function Logo ({ className }) {
  return <LogoIcon className={cn(className, 'w-20 h-11 lg:w-40 lg:h-20')} />
}