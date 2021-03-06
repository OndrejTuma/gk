import React from 'react'

import { IMAGES_PATH } from '@constants/path'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Reference from '@components/custom/Reference'
import Ribbon from '@components/custom/Ribbon'
import Wrapper from '@components/layout/Wrapper'

export default function LatestNews() {
  return (
    <Wrapper isDark>
      <Container className={'text-center'}>
        <Heading
          as={'h2'}
          className={'inline-block mb-10'}
          level={1}
          ribbon={<Ribbon isWhite className={'px-4 -ml-4'}/>}
        >Píšem len o tom, čomu rozumiem</Heading>

        <p className={'text-xl lg:text-2xl mb-4'}>Najnovšie som napísala:</p>

        <div className={'grid gap-4 lg:grid-cols-3 lg:gap-x-20 mb-9'}>
          <Reference
            imgUrl={`${IMAGES_PATH}placeholders/news.jpg`}
            name={'See-think-do-care'}
            description={'v rámci tvorby obsahu'}
            withQuotation={false}
            isWhite
          />
          <Reference
            imgUrl={`${IMAGES_PATH}placeholders/news.jpg`}
            name={'Prípadová štúdia'}
            description={'pre portál dovolenka.sme.sk'}
            withQuotation={false}
            isWhite
          />
          <Reference
            imgUrl={`${IMAGES_PATH}placeholders/news.jpg`}
            name={'See-think-do-care'}
            description={'v rámci tvorby obsahu'}
            withQuotation={false}
            isWhite
          />
        </div>
      </Container>
    </Wrapper>
  )
}