import MyQuality from '@components/custom/MyQuality'
import React from 'react'

import Container from '@components/layout/Container'
import Wrapper from '@components/layout/Wrapper'

export default function AboutMe() {
  return (
    <Wrapper isSecondary>
      <Container>
        <MyQuality
          imgUrl={'/img/about/character.jpg'}
          name={'Čo by ste o mne mali vedieť?'}
          description={(
            <>
              Keďže som až nezvyčajne organizovaná a chorobne zodpovedná,<br/>
              naďalej rada manažujem projekty, ktoré akýmkoľvek spôsobom<br/>
              súvisia s obsahom a textom na webe. Prácu vám uľahčí aj to,<br/>
              že mi nemusíte vysvetľovať zákonitosti online sveta,<br/>
              napríklad ako používať kľúčové slová, ako správne odkazovať či to,<br/>
              že v newsletteri by malo byť maximálne jedno CTA tlačítko.
            </>
          )}
        />
        <MyQuality
          isInverted
          imgUrl={'/img/about/interests.jpg'}
          name={'O čom sa mi bude dobre písať?'}
          description={(
            <>
              Milujem cestovanie a knihy, dobré jedlo a kávu.<br/>
              V bežnom živote uprednosťnujem lokálne a kvalitné produkty.<br/>
              Zaujímam sa o služby a online nástroje, ktoré uľahčujú život,<br/>
              no paradoxne aj tak stále na všetko používam papierový zápisnik.<br/>
              Viem sa vcítiť do kože marketérov a freelancerov a od júna 2019 sa zaradzujem<br/>
              medzi mamičky, takže mi už nie sú cudzie ani témy z detského sveta.
            </>
          )}
        />
        <MyQuality
          imgUrl={'/img/about/expectation.jpg'}
          name={'Čo odo mňa môžete očakávať?'}
          description={(
            <>
              Budem sa snažiť čo najlepšie pochopiť vášho zákazníka. Vyskúšam si vašu službu,<br/>
              pošpehujem konkurenciu, zanalyzujem si váš trh. Budem sa vás pýtať na veľa vecí.<br/>
              Vy mi všetko vysvetlíte vašimi slovami a poviete mi vaše očakávania<br/>
              a ja sa to pokúsim napísať čo najjednoduchšie a najzrozumiteľnejšie<br/>
              pre vašich zákazníkov. Neočakávajte však žiadnu veľkú kreatívu.<br/>
              Sama vám nevymyslím slogan ani vtipnú hlášku do reklamy.<br/>
              No rada sa zapojím do vášho kreatívneho procesu.
            </>
          )}
        />
      </Container>
    </Wrapper>
  )
}