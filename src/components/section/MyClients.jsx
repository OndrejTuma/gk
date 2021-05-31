import React from 'react'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Ribbon from '@components/custom/Ribbon'
import Wrapper from '@components/layout/Wrapper'

const clients = [
  { alt: 'Dovolenka.sme.sk', url: '/img/clients/dovolenka.sme.sk.png' },
  { alt: 'Marketing Miner', url: '/img/clients/mm.png' },
  { alt: 'Northern Hikes', url: '/img/clients/nh.png' },
  { alt: 'SEO zraz', url: '/img/clients/seozraz.png' },
  { alt: 'Spotibo', url: '/img/clients/spotibo.png' },
  { alt: 'Terraz', url: '/img/clients/terraz.png' },
]

export default function MyClients() {
  return (
    <Wrapper isSecondary isFat>
      <Container className={'text-center'}>
        <Heading className={'mb-12 lg:mx-16'} ribbon={<Ribbon isWhite/>}>S textami som pomáhala aj týmto
          klientom</Heading>
        <div className="grid gap-10 mb-5 lg:grid-cols-4 lg:gap-x-20">
          {clients.map(({ alt, url }) => (
            <figure key={url}>
              <img src={url} alt={alt}/>
            </figure>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}