import useLazyLoad from '@hooks/useLazyload'
import React from 'react'

export default function Client({alt, href, src}) {
  const [ref, intersecting] = useLazyLoad()
  const lazySrc = intersecting ? src : ''

  return (
    <figure ref={ref} className={'items-center lg:flex'}>
      {href ? (
        <a href={href}>
          <img src={lazySrc} alt={alt} className={'mx-auto'}/>
        </a>
      ) : (
        <img src={lazySrc} alt={alt} className={'mx-auto'}/>
      )}
    </figure>
  )
}