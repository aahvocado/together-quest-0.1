import schema from 'js-schema';

import Collection from 'models/Collection';
import Model from 'models/Model'

const effectSchema = schema({
  // name
  name: String,
  // type id
  typeId: String,
  // description
  '?description': String,
  // optional flavor text
  '?flavorText': String,
  // name of icon (for IconComponent)
  '?icon': String,

  //
  '?modifiers': Collection,
})

export const EFFECT_TYPE_ID = {
  GENERIC: 'GENERIC-EFFECT-ID',
  BUFF: 'BUFF-EFFECT-ID',
  DEBUFF: 'DEBUFF-EFFECT-ID',
  TEMPORARY: 'TEMPORARY-EFFECT-ID',
  SPECIAL: 'SPECIAL-EFFECT-ID',
}

const EFFECT_TYPE_ICON = {
  [EFFECT_TYPE_ID.GENERIC]: 'fa-sun',
  [EFFECT_TYPE_ID.BUFF]: 'ra-aura',
  [EFFECT_TYPE_ID.DEBUFF]: 'ra-player-pain',
  [EFFECT_TYPE_ID.TEMPORARY]: 'ra-bottled-bolt',
  [EFFECT_TYPE_ID.SPECIAL]: 'ra-moon-sun',
}
/**
 * data for an item effect, status effect, stat modifier, etc
 */
export class EffectModel extends Model {
  /** @override */
  constructor(defaultAttributes = {}) {
    super(defaultAttributes);

    this.schema = effectSchema;

    this.set(Object.assign({
      icon: EFFECT_TYPE_ICON[defaultAttributes.typeId],
    }, defaultAttributes));

    this.validate();
  }
  /**
   * gets the name of this stat
   *
   * @param {string} typeId - stat type
   * @returns {Object}
   */
  getModifierByType(typeId) {
    return this.get('modifiers').find((modifierModel) => {
      return modifierModel.targetTypeId === typeId;
    })
  }
}

export default EffectModel;
