import Ribbon from '@components/custom/Ribbon'
import React from 'react'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Reference from '@components/custom/Reference'
import Wrapper from '@components/layout/Wrapper'

import { IMAGES_PATH } from '@constants/path'

const references = [
  {
    name: 'Filip Podstavec',
    src: `${IMAGES_PATH}reference/filip.jpg`,
    description: 'Těžko se hledají lidé, kteří vědí co dělají a zároveň jsou nadšení pro svou práci. Gabka splňovala oboje a díky tomu nám pomohla nastartovat práce na obsahu a texty na webu. Bez ní bychom v Marketing Mineru asi ještě stále byly bez blogu a bez srozumitelné databáze marketingových návodů a postupů.',
  },
  {
    name: 'Ivka Grešlíkova',
    src: `${IMAGES_PATH}reference/ivka.jpg`,
    description: 'Gabka je jedna veľká profíčka, ktorá dokáže ľudskou rečou vysvetliť, prečo niektoré veci na čitateľa a zákazníka nefungujú a ako to napraviť. Stála po mojej pravej ruke pri editovaní 250-stránkovej cestopisnej knihy U vás zjem všetko. Bez jej navigácie ako upraviť niektoré pasáže by kniha nebola ono.',
  },
]

export default function MyReferences() {
  return (
    <Wrapper isSecondary isFat>
      <Container className={'text-center'}>
        <Heading
          ribbon={<Ribbon level={2} isWhite className={'px-4 -ml-4'}/>}
          className={'mb-4 inline-block'}
        >
          Títo ľudia ma odporúčajú ďalej
        </Heading>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-x-20">
          {references.map(({ description, name, src }) => (
            <Reference
              key={name}
              imgUrl={src}
              name={name}
              description={description}
              isWhite
            />
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}