import CharacterModel from 'models/CharacterModel';

import Collection from 'models/Collection';
import StatModel, { STAT_TYPE_ID } from 'models/StatModel';
// import ItemModel, { ITEM_TYPE_ID } from 'models/ItemModel';

import * as catquestItemsApi from 'apis/catquest/catquestItemsApi';
import * as catquestEffectsApi from 'apis/catquest/catquestEffectsApi';

export function strengthStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.STRENGTH,
    description: 'Represents your physical prowess.',
  }, options));
}
export function agilityStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.AGILITY,
    description: 'Represents how quick you are able to move and reaction time.',
  }, options));
}
export function wisdomStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.WISDOM,
    description: 'Represents your understanding of things and perception of surroundings.',
  }, options));
}
export function charismaStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.CHARISMA,
    description: 'Represents your social status and how well others react to the things you say.',
  }, options));
}
export function magicStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.MAGIC,
    description: 'Represents your proficiency in using magic and magical artifacts.',
  }, options));
}
export const BLINKS = new CharacterModel({
  name: 'Blinks',
  id: 'BLINKS-ID',
  title: 'Not-Naked Human',
  stats: new Collection([
    strengthStat({ value: 2 }),
    agilityStat({ value: 4 }),
    wisdomStat({ value: 5 }),
    charismaStat({ value: 4 }),
    magicStat({ value: 1 }),
  ]),
  equipments: new Collection([
    catquestItemsApi.bowTwanging(),
    catquestItemsApi.jacketLeather(),
    catquestItemsApi.pantsBreakup(),
    catquestItemsApi.greavesSaintGrebes(),
    catquestItemsApi.braceletBranches(),
  ]),
  inventory: new Collection([
    catquestItemsApi.catnipCoins({ quantity: 4 }),
    catquestItemsApi.doggyDollars({ quantity: 0 }),
    catquestItemsApi.brokenLeash(),
    catquestItemsApi.hammer(),
    catquestItemsApi.fryingPan(),
    catquestItemsApi.glowDust({ quantity: 1 }),
    catquestItemsApi.handsaw(),
    catquestItemsApi.potato({ quantity: 1, modifiers: ['glowing'] }),
    catquestItemsApi.swordRusty(),
    catquestItemsApi.bowTwanging(),
  ]),
  traits: new Collection([
    catquestEffectsApi.magicSensitivity(),
    catquestEffectsApi.debuffWounded(),
  ]),
  honors: new Collection([
    catquestEffectsApi.championMeerkatHumanArena(),
  ]),
});
export const NOOK = new CharacterModel({
  name: 'Nook',
  id: 'NOOK-ID',
  title: 'Mighty Savannah Cat',
  stats: new Collection([
    strengthStat({ value: 7 }),
    agilityStat({ value: 5 }),
    wisdomStat({ value: 3 }),
    charismaStat({ value: 1 }),
    magicStat({ value: 0 }),
  ]),
  equipments: new Collection([
    catquestItemsApi.jacketLeather({ description: 'Cooler than Blinks\'' }),
    catquestItemsApi.swordBurning(),
    catquestItemsApi.gauntletAssassins(),
  ]),
  inventory: new Collection([
    catquestItemsApi.catnipCoins({ quantity: 78 }),
    catquestItemsApi.doggyDollars({ quantity: 10 }),
    catquestItemsApi.fragmentCrystal({ name: 'Red Fragment' }),
    catquestItemsApi.rapierNooks(),
    catquestItemsApi.daggerKris(),
    catquestItemsApi.daggerBackup(),
    catquestItemsApi.alcoholWhiskey(),
    catquestItemsApi.lockpick(),
  ]),
  traits: new Collection([
    catquestEffectsApi.traitIntimidating(),
    catquestEffectsApi.debuffWounded(),
  ]),
  honors: new Collection([
    catquestEffectsApi.championMeerkatMainArena(),
  ]),
});
export const PEARL = new CharacterModel({
  name: 'Pearl',
  id: 'PEARL-ID',
  title: 'Brave Dachshund Captain',
  stats: new Collection([
      new StatModel({
        typeId: STAT_TYPE_ID.STRENGTH,
        name: 'strength',
        value: 4,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.AGILITY,
        name: 'agility',
        value: 0,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.WISDOM,
        name: 'wisdom',
        value: 5,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.CHARISMA,
        name: 'charisma',
        value: 6,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.MAGIC,
        name: 'magic',
        value: 1,
        modifier: -2,
      }),
    ]),
  equipments: [{
    slot: 'accessory',
    name: 'Mink\'s Grappling Hook',
    statMods: {},
    description: '',
  }, {
    slot: 'neck',
    name: 'Locket of Treats',
    statMods: {},
    description: 'Once per day, make a random candy treat!',
  }, {
    slot: 'hand',
    name: 'Sharper Knife',
    statMods: {},
    description: 'It will be sharper than the one in your other hand',
  }],
  stuff: [
    '32 catnip coins',
    '5 doggy dollars',
    'the Water Gem',
    'kris',
    'dog cutting dagger',
    'bone knuckles',
  ],
  traits: [
    'Peg-Legged',
    'Bark',
    'Bite',
    'Wounded',
  ],
  honors: [
    'Esteemed Member of the Cat Army',
  ],
  statMods: {
    strength: -1,
    agility: 0,
    wisdom: 0,
    charisma: 1,
    magic: 0,
  }
});
export const DOUGLAS = new CharacterModel({
  name: 'Douglas',
  id: 'DOUGLAS-ID',
  title: 'Mysterious Mole',
  stats: new Collection([
      new StatModel({
        typeId: STAT_TYPE_ID.STRENGTH,
        name: 'strength',
        value: 6,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.AGILITY,
        name: 'agility',
        value: 2,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.WISDOM,
        name: 'wisdom',
        value: 4,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.CHARISMA,
        name: 'charisma',
        value: 4,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.MAGIC,
        name: 'magic',
        value: 0,
        modifier: 0,
      }),
    ]),
  equipments: [{
    slot: 'body',
    name: 'Mountainhopper\'s Cursed Armor',
    statMods: {},
    description: '',
  }, {
    slot: 'back',
    name: 'Snake-Eye Rug Cape',
    statMods: {},
    description: '',
  }, {
    slot: 'neck',
    name: 'Trencher Amulet',
    statMods: {},
    description: '',
  }, {
    slot: 'hand',
    name: 'Crystalline Shield',
    statMods: {},
    description: '',
  }, {
    slot: 'hand',
    name: 'Magical torch',
    statMods: {},
    description: '',
  }],
  stuff: [
    '0 catnip coins',
    '12 doggy dollars',
    'lantern (unlit)',
    '(3 unidentified scrolls)',
    '(2 unindentified beakers)',
    'pipette',
  ],
  traits: [
    'Short Sighted',
  ],
  honors: [
    'Fire Fighting Human Champion',
  ],
});
