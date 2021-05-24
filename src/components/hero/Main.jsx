import React from 'react'

import StrikeLine from '@components/hero/StrikeLine'

export default function Main() {
  return (
    <div className={'p-7 bg-hero bg-cover text-xl md:text-3xl leading-none flex justify-end'}>
      <div className={'w-full lg:w-6/12'}>
        <div className={'max-w-xs md:max-w-screen-sm'}>
          <div className={'font-secondary text-secondary transform -rotate-3 mt-4 mb-2'}>Zrozumitel’né</div>
          <div className={'font-primary text-white tracking-widest'}>
            <span className={'relative'}>
              <StrikeLine/>Najlepšie
            </span> texty,<br/> ktoré predávajú!
          </div>
          <div className={'font-secondary text-secondary text-center transform -rotate-3 mb-4'}>Napíšem ich za vás</div>
        </div>
      </div>
    </div>
  )
}