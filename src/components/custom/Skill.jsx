import React from 'react'

import Heading from '@components/layout/Heading'
import Ribbon from '@components/custom/Ribbon'

export default function Skill({ Icon, name, description }) {
  return (
    <div className={'text-center w-full max-w-sm mx-auto mb-12'}>
      <Icon height={96} width={96} className={'mx-auto'}/>
      <Heading level={1} as={'h2'} className={'my-4'} ribbon={<Ribbon />}>{name}</Heading>
      <p>{description}</p>
    </div>
  )
}