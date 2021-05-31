import Ribbon from '@components/custom/Ribbon'
import React from 'react'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Wrapper from '@components/layout/Wrapper'

export default function Contact() {
  return (
    <Wrapper>
      <Container className={'text-center'}>
        <Heading
          as={'h2'}
          level={1}
          className={'inline-block mb-10'}
          ribbon={<Ribbon className={'px-4 -ml-4'}/>}
        >Ozvite sa</Heading>
        <p className={'text-xl lg:text-2xl mb-8'}>Ideálne e-mailom na gabkakoscova(at)gmail.com</p>
        <p className={'mb-4'}>Na vykanie si nepotrpím. Ak ani vy nie, pokojne mi rovno tykajte.</p>
      </Container>
    </Wrapper>
  )
}