import React from 'react'
import Image from 'next/image'

import Heading from '@components/layout/Heading'

export default function Reference({ imgUrl, name, description }) {
  return (
    <div>
      <figure className={'relative inline-block p-2'}>
        <div className={'absolute w-full h-full left-0 top-0 z-10 bg-frameYellow bg-contain bg-no-repeat bg-center'}/>
        <Image
          src={imgUrl}
          alt={name}
          width={217}
          height={212}
          className={'rounded-full'}
        />
      </figure>
      <Heading className={'bg-secondary px-10 py-1 mb-6 -mt-8 relative z-10'} level={3}>{name}</Heading>
      <p className={'mx-5'}>
        <span className={'-ml-8 text-4xl text-secondary font-secondary inline-block leading-4 align-bottom relative top-9'}>"</span>
        {description}
        <span className={'-mr-8 text-4xl text-secondary font-secondary inline-block leading-4 align-bottom relative top-5'}>"</span>
      </p>
    </div>
  )
}