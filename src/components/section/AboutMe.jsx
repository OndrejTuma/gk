import React from 'react'

import { IMAGES_PATH } from '@constants/path'

import Container from '@components/layout/Container'
import MyQuality from '@components/custom/MyQuality'
import Ribbon from '@components/custom/Ribbon'
import Wrapper from '@components/layout/Wrapper'

export default function AboutMe() {
  return (
    <Wrapper isSecondary>
      <Container>
        <MyQuality
          imgUrl={`${IMAGES_PATH}about/character.jpg`}
          name={'Čo by ste o mne mali vedieť?'}
          description={'Keďže som až nezvyčajne organizovaná a chorobne zodpovedná, naďalej rada manažujem projekty, ktoré akýmkoľvek spôsobom súvisia s obsahom a textom na webe. Prácu vám uľahčí aj to, že mi nemusíte vysvetľovať zákonitosti online sveta, napríklad ako používať kľúčové slová, ako správne odkazovať či to, že v newsletteri by malo byť maximálne jedno CTA tlačítko.'}
          ribbon={<Ribbon level={2} isWhite className={'-ml-4'}/>}
        />
        <MyQuality
          isInverted
          imgUrl={`${IMAGES_PATH}about/interests.jpg`}
          name={'O čom sa mi bude dobre písať?'}
          description={'Milujem cestovanie a knihy, dobré jedlo a kávu. V bežnom živote uprednosťnujem lokálne a kvalitné produkty. Zaujímam sa o služby a online nástroje, ktoré uľahčujú život, no paradoxne aj tak stále na všetko používam papierový zápisnik. Viem sa vcítiť do kože marketérov a freelancerov a od júna 2019 sa zaradzujem medzi mamičky, takže mi už nie sú cudzie ani témy z detského sveta.'}
          ribbon={<Ribbon level={2} isWhite className={'ml-4'}/>}
        />
        <MyQuality
          imgUrl={`${IMAGES_PATH}about/expectation.jpg`}
          name={'Čo odo mňa môžete očakávať?'}
          description={'Budem sa snažiť čo najlepšie pochopiť vášho zákazníka. Vyskúšam si vašu službu, pošpehujem konkurenciu, zanalyzujem si váš trh. Budem sa vás pýtať na veľa vecí. Vy mi všetko vysvetlíte vašimi slovami a poviete mi vaše očakávania a ja sa to pokúsim napísať čo najjednoduchšie a najzrozumiteľnejšie pre vašich zákazníkov. Neočakávajte však žiadnu veľkú kreatívu. Sama vám nevymyslím slogan ani vtipnú hlášku do reklamy. No rada sa zapojím do vášho kreatívneho procesu.'}
          ribbon={<Ribbon level={2} isWhite className={'-ml-4'}/>}
        />
      </Container>
    </Wrapper>
  )
}