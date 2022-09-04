import type ICard from '../interfaces/ICard'

export default function montaCard(dadosCarta: any): ICard {
  return {
    card_name: dadosCarta.name,
    card_name_tr: dadosCarta.printed_name,
    art_normal: dadosCarta.image_uris.normal,
    art_large: dadosCarta.image_uris.large,
    art_border_crop: dadosCarta.image_uris.border_crop,
    art_crop: dadosCarta.image_uris.art_crop,
    description: dadosCarta.oracle_text.replace(/\n/g, '. '),
    description_tr: dadosCarta.printed_text,
    keywords: dadosCarta.keywords,
    formats: dadosCarta.legalities,
    gatherer_url: dadosCarta.related_uris.gatherer,
    scryfall_url: dadosCarta.scryfall_uri,
    mana_cost: dadosCarta.mana_cost,
    cmc: dadosCarta.cmc,
    colors: dadosCarta.colors,
    color_identity: dadosCarta.color_identity,
    type_line: dadosCarta.type_line,
    type_line_tr: dadosCarta.printed_type_line,
    power: dadosCarta.power,
    toughness: dadosCarta.toughness
  }
}
