import React from 'react'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Ribbon from '@components/custom/Ribbon'
import Wrapper from '@components/layout/Wrapper'

export default function MyClients() {
  return (
    <Wrapper isSecondary isFat>
      <Container className={'text-center'}>
        <Heading className={'mb-12 lg:mx-16'} ribbon={<Ribbon isWhite/>}>S textami som pomáhala aj týmto klientom</Heading>
        <div className="grid gap-10 mb-5 lg:grid-cols-4 lg:gap-x-20">
          {Array(8).fill(0).map(i => (
            <div className={'uppercase text-3xl'}>Logo</div>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}