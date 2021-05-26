import React from 'react'

import Heading from '@components/layout/Heading'
import RoundImage from '@components/custom/RoundImage'

export default function Reference({ imgUrl, name, description }) {
  return (
    <div>
      <RoundImage alt={name} size={204} url={imgUrl}/>
      <Heading className={'bg-secondary px-10 py-1 mb-6 -mt-8 relative z-10'} level={3}>{name}</Heading>
      <p className={'mx-5'}>
        <span className={'-ml-8 text-4xl text-secondary font-secondary inline-block leading-4 align-bottom relative top-9'}>"</span>
        {description}
        <span className={'-mr-8 text-4xl text-secondary font-secondary inline-block leading-4 align-bottom relative top-5'}>"</span>
      </p>
    </div>
  )
}