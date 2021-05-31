import React from 'react'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Reference from '@components/custom/Reference'
import Wrapper from '@components/layout/Wrapper'

export default function MyReferences() {
  return (
    <Container>
      <Wrapper className={'text-center'}>
        <Heading className={'mb-4'}>Títo ľudia ma odporúčajú ďalej</Heading>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-x-20">
          <Reference
            imgUrl={'/img/reference/filip.jpg'}
            name={'Filip Podstavec'}
            description={'Těžko se hledají lidé, kteří vědí co dělají a zároveň jsou nadšení pro svou práci. Gabka splňovala oboje a díky tomu nám pomohla nastartovat práce na obsahu a texty na webu. Bez ní bychom v Marketing Mineru asi ještě stále byly bez blogu a bez srozumitelné databáze marketingových návodů a postupů.'}
          />
          <Reference
            imgUrl={'/img/reference/ivka.jpg'}
            name={'Ivka Grešlíkova'}
            description={'Gabka je jedna veľká profíčka, ktorá dokáže ľudskou rečou vysvetliť, prečo niektoré veci na čitateľa a zákazníka nefungujú a ako to napraviť. Stála po mojej pravej ruke pri editovaní 250-stránkovej cestopisnej knihy U vás zjem všetko. Bez jej navigácie ako upraviť niektoré pasáže by kniha nebola ono.'}
          />
        </div>
      </Wrapper>
    </Container>
  )
}