import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

export default function RoundImage({ alt, className, url, size, isWhite = false, isBig = false }) {
  return (
    <figure className={cn(className, 'relative place-self-start inline-block p-2')}>
      <div className={cn('absolute w-full h-full left-0 top-0 z-10 bg-contain bg-no-repeat bg-center', {
        'bg-frameYellow': !isWhite,
        'bg-frameWhite': isWhite && !isBig,
        'bg-frameWhiteBig': isWhite && isBig,
      })}/>
      <div className={cn('rounded-full leading-none', {
        'bg-secondary': !isWhite,
        'bg-white': isWhite,
      })}>
        <Image
          src={url}
          alt={alt}
          width={size}
          height={size}
          className={'rounded-full'}
        />
      </div>
    </figure>
  )
}