import React from 'react'

import { IMAGES_PATH } from '@constants/path'

import Client from '@components/custom/Client'
import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Ribbon from '@components/custom/Ribbon'
import Wrapper from '@components/layout/Wrapper'

const clients = [
  { alt: 'Dovolenka.sme.sk', src: `${IMAGES_PATH}clients/dovolenka.sme.sk.png` },
  { alt: 'Marketing Miner', src: `${IMAGES_PATH}clients/mm.png` },
  { alt: 'Northern Hikes', src: `${IMAGES_PATH}clients/nh.png` },
  { alt: 'SEO zraz', src: `${IMAGES_PATH}clients/seozraz.png` },
  { alt: 'Spotibo', src: `${IMAGES_PATH}clients/spotibo.png` },
  { alt: 'Terraz', src: `${IMAGES_PATH}clients/terraz.png` },
]

export default function MyClients() {
  return (
    <Wrapper>
      <Container className={'text-center'}>
        <Heading
          className={'mb-12 lg:mx-16'}
          ribbon={<Ribbon/>}
        >S textami som pomáhala aj týmto klientom</Heading>
        <div className="grid gap-20 mb-5 lg:grid-cols-3 lg:gap-x-20">
          {clients.map(({ alt, href, src }) => (
            <Client key={src} alt={alt} href={href} src={src}/>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}