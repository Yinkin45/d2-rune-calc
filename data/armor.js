const ARMOR_RUNEWORDS = [
  {
    name: 'Enigma',
    type: 'Armor',
    minLevel: 65,
    runes: ['jah', 'ith', 'ber'],
    imageUrl: '/images/field_plate.png',
    modifiers: [
      { text: '+750-775 Defense' },
      { text: '+2 To All Skills' },
      { text: '+1 to Teleport' },
      { text: '+45% Faster Walk/Run Speed' },
      { text: 'Increase Maximum Life by 5%' },
      { text: 'Damage Reduced by 8%' },
      { text: '+14 Life After Each Kill' },
      { text: '15% Damage Taken Goes to Mana' },
      {
        text: '+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)',
      },
    ],
  },
  {
    name: 'Bone',
    type: 'Armor',
    minLevel: 47,
    runes: ['sol', 'um', 'um'],
    imageUrl: '/images/field_plate.png',
    modifiers: [
      { text: '15% Chance to cast level 10 Bone Armor' },
      { text: '15% Chance to cast level 10 Bone Spear on Striking' },
      { text: '+2 To Necromancer Skill Levels' },
      { text: '+50–150 To Mana' },
      { text: 'Increase Maximum Life by 5%' },
      { text: 'All Resistances +30' },
      { text: 'Damage Reduced By 7' },
    ],
  },
]

export default ARMOR_RUNEWORDS
