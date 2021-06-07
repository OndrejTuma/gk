import React from 'react'

import Hamburger from '@components/header/Hamburger'

import { id as hamburgerId } from './Hamburger'

const menu = [
  {
    label: 'O mne',
    url: '#o-mne',
  },
  {
    label: 'Reference',
    url: '#reference',
  },
  {
    label: 'Kontakt',
    url: '#kontakt',
  },
]
const menuId = 'menu'

const handleMenuClick = () => (document.getElementById(hamburgerId).checked = false)

export default function Menu() {
  return (
    <div className={'font-primary uppercase text-primary tracking-widest lg:text-lg'}>
      <Hamburger/>
      <div className={'hidden absolute z-10 w-full left-0 checked-sibling:block lg:static lg:block'}>
        <ul id={menuId} className={'bg-white lg:flex'}>
          {menu.map(({ label, url }) => (
            <li key={url} className={'lg:ml-10'}>
              <a href={url} className={'block p-6 lg:p-0'} onClick={handleMenuClick}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}