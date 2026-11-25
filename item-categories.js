export const itemCategories = {
  balls: ['Покеболы', 'Poké Balls'],
  ballGear: ['Чехлы и аксессуары для покеболов', 'Poké Ball cases and accessories'],
  berries: ['Ягоды', 'Berries'],
  z: ['Z-кристаллы', 'Z-Crystals'],
  mega: ['Мегакамни', 'Mega Stones'],
  evolution: ['Эволюция и ископаемые', 'Evolution items and fossils'],
  medicine: ['Лекарства', 'Medicine'],
  boosters: ['Витамины и усилители', 'Vitamins and boosters'],
  tms: ['Технические машины', 'TMs and HMs'],
  food: ['Еда и приманки', 'Food and bait'],
  held: ['Удерживаемые предметы', 'Held items'],
  craft: ['Материалы и наборы для ремесла', 'Crafting'],
  books: ['Книги', 'Books'],
  weather: ['Погода', 'Weather'],
  shadow: ['Теневые предметы', 'Shadow items'],
  training: ['Тренировка и дружба', 'Training and friendship'],
  equipment: ['Снаряжение и инструменты', 'Equipment'],
  combat: ['Оружие и боевые расходники', 'Combat items'],
  misc: ['Прочие предметы', 'Miscellaneous'],
};

export function itemCategory(item) {
  const {name, folder, category, keywords = []} = item;
  const tags = (...values) => values.some(value => keywords.includes(value));
  if (tags('Poke Ball Case', 'Poke Ball Accessory')) return 'ballGear';
  if (tags('Poke Ball') || /^(?:Poké ?Ball|Poke ?Ball)$/i.test(name)) return 'balls';
  if (tags('Berry') || / Berry$/i.test(name)) return 'berries';
  if (folder === '55ncmIvjbjv3PZZ8' || /ium Z$|nium Z$|Z-Crystal/i.test(name)) return 'z';
  if (tags('Mega Stone')) return 'mega';
  if (tags('TM') || /^(?:TM|HM)[ -]?\d+/i.test(name)) return 'tms';
  if (tags('Weather Clay', 'Weather') || /^(?:Damp|Heat|Icy|Smooth) Rock$/i.test(name)) return 'weather';
  if (folder === 'lpdptis936rBZFDU') return 'shadow';
  if (tags('Medicine', 'Sci-Fi Drug') || /^(?:Awakening|Heal Powder|Energy Root|Energy Powder|Revival Herb|Paralyze Heal|Full Heal|Ice Heal|Max Revive|Revive|Potion|Super Potion|Hyper Potion|Max Potion|Full Restore|Elixir|Ether|Max Ether|Max Elixir)$/i.test(name)) return 'medicine';
  if (tags('Vitamin', 'X-Item') || /^Rare Candy$|^Stat Booster\b|^Exp\.? Candy\b|^Type Booster$/i.test(name)) return 'boosters';
  if (tags('Book')) return 'books';
  if (tags('Held Item', 'Accessory', 'Keepsake', 'Fashionista') || category === 'Held Item' || /^(?:Black Sludge|Leftovers|.+'s Mask)$/i.test(name)) return 'held';
  if (tags('Crafting', 'Shard', 'Herbal') || /\b(?:Apricorn|Shard|Mulch)$/i.test(name)) return 'craft';
  if (/\bFossil$|^(?:Dawn|Dusk|Fire|Ice|Leaf|Moon|Shiny|Sun|Thunder|Water|Oval) Stone$|^(?:Prism Scale|Razor Claw|Razor Fang|Protector|Reaper Cloth|Sachet|Whipped Dream|Dubious Disc|Upgrade|Old Amber|Pokemon Egg|Zygarde Cells|Zygarde Cube)$/i.test(name)) return 'evolution';
  if (tags('Food', 'Snack', 'Refreshment', 'Chef') || /\b(?:Poffin|Bait|Treat|Cookie|Juice)$/i.test(name)) return 'food';
  if (tags('Combat') || ['dFIH3ZVcIQRJGnr8','erOegeCoXbG55V50'].includes(folder) || /\b(?:Grenade|Cannon|Blaster|Cap|Flashbang)$/i.test(name)) return 'combat';
  if (/^Focus \(|\bCologne$|^(?:Stand United|Friend of a Friend|Friendship Bracelet|Heart Scale)$/i.test(name)) return 'training';
  if (tags('Equipment', 'Travel') || ['Equipment','Key'].includes(category) || /\b(?:Armor|Armour|Vest|Goggles|Suit|Spacesuit|Trenchcoat|Shield|Shielding|Kit|Detector|Radar|Analyzer|Sleeping Bag|Rope|Tool|Phone|Pokédex|Watch|Propellor|Machine|Emitter|Filter|Frame|Translator|Warmer|Grabby Arm|Scrub Cartridge|Scrubbing Spray|Pheromone Cartridge)\b/i.test(name)) return 'equipment';
  return 'misc';
}

const itemNames = {
  'Basic Ball': 'Обычный покебол', 'Poké Ball': 'Покебол', 'Great Ball': 'Грейтбол',
  'Ultra Ball': 'Ультрабол', 'Master Ball': 'Мастербол', 'Moon Ball': 'Лунный покебол',
  'Nest Ball': 'Гнездовой покебол', 'Quick Ball': 'Быстрый покебол', 'Luxury Ball': 'Роскошный покебол',
  Potion: 'Зелье', 'Super Potion': 'Суперзелье', 'Hyper Potion': 'Гиперзелье', 'Max Potion': 'Максимальное зелье',
  Antidote: 'Антидот', Awakening: 'Пробуждение', 'Full Heal': 'Полное лечение', 'Full Restore': 'Полное восстановление',
  'Rare Candy': 'Редкая конфета', 'Heart Scale': 'Чешуйка сердца', Leftovers: 'Остатки еды',
  'Fire Stone': 'Огненный камень', 'Water Stone': 'Водный камень', 'Leaf Stone': 'Листовой камень',
  'Thunder Stone': 'Громовой камень', 'Moon Stone': 'Лунный камень', 'Sun Stone': 'Солнечный камень',
  'Ice Stone': 'Ледяной камень', 'Dawn Stone': 'Камень рассвета', 'Dusk Stone': 'Камень сумерек',
  'Shiny Stone': 'Сияющий камень', 'Oval Stone': 'Овальный камень',
};

export function itemRussianName(item) {
  if (itemNames[item.name]) return itemNames[item.name];
  if (itemCategory(item) === 'berries') return item.name.replace(/^(.+) Berry$/i, 'Ягода $1');
  return '';
}
