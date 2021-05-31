import React from 'react'

import { IMAGES_PATH } from '@constants/path'

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
    <Wrapper isSecondary isFat>
      <Container className={'text-center'}>
        <Heading
          className={'mb-12 lg:mx-16'}
          ribbon={<Ribbon isWhite/>}
        >S textami som pomáhala aj týmto klientom</Heading>
        <div className="grid gap-20 mb-5 lg:grid-cols-4 lg:gap-x-20">
          {clients.map(({ alt, href, src }) => (
            <figure key={src} className={'items-center lg:flex'}>
              {href ? (
                <a href={href}>
                  <img src={src} alt={alt} className={'mx-auto'}/>
                </a>
              ) : (
                <img src={src} alt={alt} className={'mx-auto'}/>
              )}
            </figure>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}