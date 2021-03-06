import { ITEM_SUBTYPES, ITEM_TYPES } from './types'

const WEAPONS_RUNEWORDS = [
  {
    name: 'Breath of the Dying',
    types: [ITEM_TYPES.WEAPON],
    subTypes: [...Object.values(ITEM_SUBTYPES)],
    minLevel: 69,
    runes: ['vex', 'hel', 'el', 'eld', 'zod', 'eth'],
    imageUrl: '/images/great_sword.png',
    modifiers: [
      {
        text: '50% Chance to Cast Level 20 Poison Nova When You Kill An Enemy',
      },
      { text: 'Indestructible' },
      { text: '+60% Increased Attack Speed' },
      { text: '+350-400% Enhanced Damage (varies)' },
      { text: '+200% Damage to Undead' },
      { text: '-25% Target Defense' },
      { text: '+50 to Attack Rating' },
      { text: '+50 to Attack Rating Against Undead' },
      { text: '7% Mana Stolen Per Hit' },
      { text: '12-15% Life Stolen Per hit (varies)' },
      { text: 'Prevent Monster Heal' },
      { text: '+30 to All Attributes' },
      { text: '+1 to Light Radius' },
      { text: 'Requirements -20%' },
    ],
  },
  {
    name: 'Beast',
    types: [ITEM_TYPES.WEAPON],
    subTypes: [ITEM_SUBTYPES.AXE, ITEM_SUBTYPES.SCEPTER, ITEM_SUBTYPES.HAMMER],
    minLevel: 69,
    runes: ['vex', 'hel', 'el', 'eld', 'zod', 'eth'],
    imageUrl: '/images/great_sword.png',
    modifiers: [
      { text: 'Level 9 Fanaticism Aura When Equipped' },
      { text: '+40% Increased Attack Speed' },
      { text: '+240-270% Enhanced Damage' },
      { text: '+20% Chance of Crushing Blow' },
      { text: '+25% Chance of Open Wounds' },
      { text: '+3 To Werebear' },
      { text: '+3 To Lycanthropy' },
      { text: 'Prevent Monster Heal' },
      { text: '+25-40 To Strength' },
      { text: '+10 To Energy' },
      { text: '+2 To Mana After Each Kill' },
      { text: 'Level 13 Summon Grizzly (5 Charges)' },
    ],
  },
]

export default WEAPONS_RUNEWORDS
