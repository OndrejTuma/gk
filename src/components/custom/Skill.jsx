import React from 'react'

import Heading from '@components/layout/Heading'
import Ribbon from '@components/custom/Ribbon'

export default function Skill({ Icon, name, description }) {
  return (
    <div className={'text-center w-full max-w-sm mx-auto mb-12'}>
      <Icon className={'mx-auto w-16 h-16 lg:w-20 lg:h-20'}/>
      <Heading level={4} as={'h3'} className={'my-4 text-xl lg:text-3xl'} ribbon={<Ribbon />}>{name}</Heading>
      <p>{description}</p>
    </div>
  )
}