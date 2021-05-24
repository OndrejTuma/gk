import Container from '@components/layout/Container'
import React from 'react'

import CopyEditingIcon from '@icons/copyediting.svg'
import CopyWritingIcon from '@icons/copywriting.svg'
import IdeaIcon from '@icons/idea.svg'
import MarketingIcon from '@icons/marketing.svg'

import Heading from '@components/layout/Heading'
import Skill from '@components/custom/Skill'
import Wrapper from '@components/layout/Wrapper'

export default function MySkills() {
  return (
    <Container>
      <Wrapper>
        <Heading className={'text-center mb-10'}>Povedzte si, čo potrebujete</Heading>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-20">
          <Skill
            Icon={CopyWritingIcon}
            name={'Copywriting'}
            description={(
              <>
                Texty na web, newsletter, <br/>
                produktová či info stránka, blogový príspevok <br/>
                alebo natívna reklama. Napíšem to za vás.
              </>
            )}
          />
          <Skill
            Icon={CopyEditingIcon}
            name={'Copyediting'}
            description={(
              <>
                Texty máte hotové <br/>
                a potrebujete na nich hodiť odborné oko? <br/>
                Pozriem, okomentujem, prípadne vám to prepíšem.
              </>
            )}
          />
          <Skill
            Icon={IdeaIcon}
            name={'Copy a content manažment'}
            description={(
              <>
                Je čas riešiť copy a content na webe koncepčne? <br/>
                Od stratégie cez štruktúru a štýl až po zadanie? <br/>
                Zmanažujem to celé za vás.
              </>
            )}
          />
          <Skill
            Icon={MarketingIcon}
            name={'Firemná žurnalistika'}
            description={(
              <>
                Mall má svoje médium, Redbull má svoje médium, <br/>
                aj vy chcete mať svoje médium. <br/>
                Pomôžem vám ho rozbehnúť.
              </>
            )}
          />
        </div>
      </Wrapper>
    </Container>
  )
}