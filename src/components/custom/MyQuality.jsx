import React from 'react'
import cn from 'classnames'

import Heading from '@components/layout/Heading'
import Ribbon from '@components/custom/Ribbon'
import RoundImage from '@components/custom/RoundImage'

export default function MyQuality({ imgUrl, name, description, isInverted, ribbon = <Ribbon level={2} isWhite/> }) {
  return (
    <div className={cn('text-center lg:text-left lg:flex mb-10 lg:mb-2', { 'lg:text-right': isInverted })}>
      <div className={`lg:m${isInverted ? 'l' : 'r'}-20 mt-10 order-${isInverted ? 2 : 1}`}>
        <Heading className={'mb-3 inline-block'} ribbon={ribbon}>{name}</Heading>
        <p>{description}</p>
      </div>
      <RoundImage
        alt={name}
        className={`flex-shrink-0 my-4 lg:my-0 order-${isInverted ? 1 : 2}`}
        isBig
        isWhite
        size={276}
        url={imgUrl}
      />
    </div>
  )
}