import Reference from '@components/custom/Reference'
import React from 'react'

import Container from '@components/layout/Container'
import Heading from '@components/layout/Heading'
import Wrapper from '@components/layout/Wrapper'

export default function MyReferences() {
  return (
    <Container>
      <Wrapper className={'text-center'}>
        <Heading className={'mb-4'}>Títo ľudia ma odporúčajú ďalej</Heading>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-x-20">
          <Reference
            imgUrl={'/img/cover.jpg'}
            name={'Filip z Marketing'}
            description={'V online marketingu sa pohybujem už viac než 8 rokov, z toho 5 pôsobím na voľnej nohe. V minulosti som sa venovala predovšetkým link buildingu a obsahovému marketingu. Dnes mi je už bližšie samotné písanie.'}
          />
          <Reference
            imgUrl={'/img/cover.jpg'}
            name={'Janko zo Spotibo'}
            description={'V online marketingu sa pohybujem už viac než 8 rokov, z toho 5 pôsobím na voľnej nohe. V minulosti som sa venovala predovšetkým link buildingu a obsahovému marketingu. Dnes mi je už bližšie samotné písanie.'}
          />
          <Reference
            imgUrl={'/img/cover.jpg'}
            name={'Nomádka Iwka'}
            description={'V online marketingu sa pohybujem už viac než 8 rokov, z toho 5 pôsobím na voľnej nohe. V minulosti som sa venovala predovšetkým link buildingu a obsahovému marketingu. Dnes mi je už bližšie samotné písanie.'}
          />
        </div>
      </Wrapper>
    </Container>
  )
}