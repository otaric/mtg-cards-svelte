export default interface ICard {
  card_name: string
  card_name_tr: string
  art_normal: string
  art_large: string
  art_border_crop: string
  art_crop: string
  description: string
  description_tr: string
  keywords: Array<string>
  formats: object
  gatherer_url: string
  scryfall_url: string
  mana_cost: string
  cmc: number
  colors: Array<string>
  color_identity: Array<string>
  type_line: string
  type_line_tr: string
  power: string
  toughness: string
}
