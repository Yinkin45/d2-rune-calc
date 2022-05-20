import { ITEM_TYPES } from './types'

const HELMETS_RUNEWORDS = [
  {
    name: 'Lore',
    types: [ITEM_TYPES.HELMET],
    minLevel: 27,
    runes: ['ort', 'sol'],
    imageUrl: '/images/field_plate.png',
    modifiers: [
      { text: '+1 To All Skill Levels' },
      { text: '+10 To Energy' },
      { text: '+2 To Mana After Each Kill' },
      { text: 'Lightning Resist +30%' },
      { text: 'Damage Reduced By 7' },
      { text: '+2 To Light Radius' },
    ],
  },
  {
    name: 'Nadir',
    types: [ITEM_TYPES.HELMET],
    minLevel: 13,
    runes: ['nef', 'tir'],
    imageUrl: '/images/field_plate.png',
    modifiers: [
      { text: '+50% Enhanced Defense' },
      { text: '+10 Defense' },
      { text: '+30 Defense vs. Missile' },
      { text: 'Level 13 Cloak of Shadows (9 Charges)' },
      { text: '+2 To Mana After Each Kill' },
      { text: '+5 To Strength' },
      { text: '−33% Extra Gold From Monsters' },
      { text: '−3 To Light Radius' },
    ],
  },
]

export default HELMETS_RUNEWORDS
