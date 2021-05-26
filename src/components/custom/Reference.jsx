import React from 'react'
import cn from 'classnames'

import Heading from '@components/layout/Heading'
import RoundImage from '@components/custom/RoundImage'

export default function Reference({ description, imgUrl, isWhite = false, name, withQuotation = true }) {
  return (
    <div>
      <RoundImage alt={name} size={204} url={imgUrl} isWhite={isWhite}/>
      <Heading className={cn('px-4 py-1 mb-6 -mt-8 relative z-10', {
        'bg-secondary': !isWhite,
        'bg-white': isWhite,
      })} level={3}>{name}</Heading>
      <p className={'mx-5'}>
        {withQuotation && (
          <span
            className={cn('-ml-8 text-4xl font-secondary inline-block leading-4 align-bottom relative top-9', {
              'text-secondary': !isWhite,
              'text-white': isWhite,
            })}
          >"</span>
        )}
        {description}
        {withQuotation && (
          <span
            className={cn('-mr-8 text-4xl font-secondary inline-block leading-4 align-bottom relative top-5', {
              'text-secondary': !isWhite,
              'text-white': isWhite,
            })}
          >"</span>
        )}
      </p>
    </div>
  )
}