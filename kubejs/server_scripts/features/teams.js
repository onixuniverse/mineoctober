let teams = [
// =============================================================================
// ============================== REPUBLICAN ===================================
// =============================================================================
// =============== REPUBLICAN (универсальное) ===============
// Tier1
{
  id: "baron_republic",
  name: "Старейшина",
  color: "#7a6d55", // оливково-серый — мудрость и опыт
  state: "prefix"
},
// Tier2
{
  id: "count_republic_male",
  name: "Городской глава",
  color: "#6b8e23", // оливковый — стабильность и управление
  state: "prefix"
},
{
  id: "count_republic_female",
  name: "Городская глава",
  color: "#6b8e23", // оливковый — стабильность и управление
  state: "prefix"
},
// Tier3
{
  id: "duke_republic",
  name: "Бургомистр",
  color: "#a67c00", // тёмное золото — авторитет и городская власть
  state: "prefix"
},
// Tier4
{
  id: "king_republic_male",
  name: "Лорд-Мэр",
  color: "#d4af37", // золотисто-бронзовый — высшая гражданская честь
  state: "prefix"
},
{
  id: "king_republic_female",
  name: "Леди-Мэр",
  color: "#d4af37", // золотисто-бронзовый — высшая гражданская честь
  state: "prefix"
},
// =============== ANGLO-SAXON REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_anglosaxon",
  name: "Рив",
  color: "#8d6e63", // тёплый коричневый — дерево и земля собрания
  state: "prefix"
},
// Tier2
{
  id: "count_republic_anglosaxon",
  name: "Шир-Рив",
  color: "#5d4037", // тёмно-коричневый — почва и старейшины
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_anglosaxon",
  name: "Витен",
  color: "#4e342e", // угольно-коричневый — мудрость витенагемота
  state: "prefix"
},
// Tier4
{
  id: "king_republic_anglosaxon",
  name: "Спикер",
  color: "#3e2723", // почти чёрный — авторитет председателя
  state: "prefix"
},
// =============== GREEK REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_greek_male",
  name: "Архонт",
  color: "#c2b280", // песочный — мрамор агоры
  state: "prefix"
},
{
  id: "baron_republic_greek_female",
  name: "Архонтида",
  color: "#c2b280", // песочный — мрамор агоры
  state: "prefix"
},
// Tier2
{
  id: "count_republic_greek_male",
  name: "Эпоним",
  color: "#6b8e23", // оливковый — священное дерево Афины
  state: "prefix"
},
{
  id: "count_republic_greek_female",
  name: "Эпонима",
  color: "#6b8e23", // оливковый — священное дерево Афины
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_greek_male",
  name: "Эфор",
  color: "#2c3e50", // тёмно-синий — строгость спартанского закона
  state: "prefix"
},
{
  id: "duke_republic_greek_female",
  name: "Эфорисса",
  color: "#2c3e50", // тёмно-синий — строгость спартанского закона
  state: "prefix"
},
// Tier4
{
  id: "king_republic_greek_male",
  name: "Гегемон",
  color: "#990033", // бордовый — власть и воинская доблесть
  state: "prefix"
},
{
  id: "king_republic_greek_female",
  name: "Гегемонисса",
  color: "#990033", // бордовый — власть и воинская доблесть
  state: "prefix"
},
// =============== MONGOL REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_mongol",
  name: "Улусник",
  color: "#8d6e63", // тёплый коричневый — войлок и степь
  state: "prefix"
},
// Tier2
{
  id: "count_republic_mongol",
  name: "Йэхэ Заргачи",
  color: "#6d4c41", // тёмная кожа — делегат курултая
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_mongol",
  name: "Курултайчи",
  color: "#5d4037", // угольно-коричневый — мудрость собрания
  state: "prefix"
},
// Tier4
{
  id: "king_republic_mongol",
  name: "Йэхэ Толгой",
  color: "#3e2723", // почти чёрный — верховный старейшина
  state: "prefix"
},
// =============== MUGHAL REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_mughal",
  name: "Амир",
  color: "#2e8b57", // морская волна — мудрость и совет
  state: "prefix"
},
// Tier2
{
  id: "count_republic_mughal",
  name: "Шейх уль-Ислам",
  color: "#3cb371", // средний изумруд — духовный авторитет
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_mughal",
  name: "Вазир аль-Азам",
  color: "#006400", // тёмно-зелёный — верховный советник
  state: "prefix"
},
// Tier4
{
  id: "king_republic_mughal",
  name: "Амир аль-Му’минин",
  color: "#90ee90", // светлая зелень — лидер верующих
  state: "prefix"
},
// =============== NORSE REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_norse_male",
  name: "Тингманн",
  color: "#4a6b6b", // серо-бирюзовый — камни тинга у моря
  state: "prefix"
},
{
  id: "baron_republic_norse_female",
  name: "Тингконна",
  color: "#4a6b6b", // серо-бирюзовый — камни тинга у моря
  state: "prefix"
},
// Tier2
{
  id: "count_republic_norse_male",
  name: "Лагманн",
  color: "#5a7d6d", // тёмная бирюза — законы под северным небом
  state: "prefix"
},
{
  id: "count_republic_norse_female",
  name: "Лагконна",
  color: "#5a7d6d", // тёмная бирюза — законы под северным небом
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_norse",
  name: "Годи",
  color: "#8a9a8a", // серо-зелёный — мох на священных камнях
  state: "prefix"
},
// Tier4
{
  id: "king_republic_norse",
  name: "Логреттумадр",
  color: "#b8c6b8", // светло-серый с зеленью — мудрость верховного судьи
  state: "prefix"
},
// =============== ROMAN REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_roman_male",
  name: "Магистр",
  color: "#8b4513", // сиена — римская земля и тога
  state: "prefix"
},
{
  id: "baron_republic_roman_female",
  name: "Магистра",
  color: "#8b4513", // сиена — римская земля и тога
  state: "prefix"
},
// Tier2
{
  id: "count_republic_roman",
  name: "Префект",
  color: "#4682b4", // стальной синий — порядок и дисциплина
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_roman",
  name: "Трибун",
  color: "#b22222", // киноварь — защита народа
  state: "prefix"
},
// Tier4
{
  id: "king_republic_roman",
  name: "Консул",
  color: "#800080", // пурпур — высшая республиканская власть
  state: "prefix"
},
// =============== SERBIAN REPUBLICAN ===============
// Tier1
{
  id: "baron_republic_serbian_male",
  name: "Вечевник",
  color: "#6b5b4b", // землистый коричневый — мудрость народного собрания
  state: "prefix"
},
{
  id: "baron_republic_serbian_female",
  name: "Вечевница",
  color: "#6b5b4b", // землистый коричневый — мудрость народного собрания
  state: "prefix"
},
// Tier2
{
  id: "count_republic_serbian_male",
  name: "Саборник",
  color: "#8b7355", // охристо-серый — голос граждан на саборе
  state: "prefix"
},
{
  id: "count_republic_serbian_female",
  name: "Саборница",
  color: "#8b7355", // охристо-серый — голос граждан на саборе
  state: "prefix"
},
// Tier3
{
  id: "duke_republic_serbian_male",
  name: "Народный Судия",
  color: "#a68a64", // светло-коричневый — справедливость и выборный суд
  state: "prefix"
},
{
  id: "duke_republic_serbian_female",
  name: "Народная Судия",
  color: "#a68a64", // светло-коричневый — справедливость и выборный суд
  state: "prefix"
},
// Tier4
{
  id: "king_republic_serbian_male",
  name: "Избранник Земли",
  color: "#d4af37", // золотисто-бронзовый — доверие всего народа
  state: "prefix"
},
{
  id: "king_republic_serbian_female",
  name: "Избранница Земли",
  color: "#d4af37", // золотисто-бронзовый — доверие всего народа
  state: "prefix"
},
// =============================================================================
// ================================ FEUDAL =====================================
// =============================================================================
// =============== FEUDAL (универсальное) ===============
// Tier1
{
  id: "baron_feudal_male",
  name: "Барон",
  color: "#556b2f", // тёмно-оливковый — земля и замок
  state: "prefix"
},
{
  id: "baron_feudal_female",
  name: "Баронесса",
  color: "#556b2f", // тёмно-оливковый — земля и замок
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_male",
  name: "Граф",
  color: "#708090", // сланцевый — стены графства
  state: "prefix"
},
{
  id: "count_feudal_female",
  name: "Графиня",
  color: "#708090", // сланцевый — стены графства
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_male",
  name: "Герцог",
  color: "#8b4513", // коричневый — дубовые залы герцогства
  state: "prefix"
},
{
  id: "duke_feudal_female",
  name: "Герцогиня",
  color: "#8b4513", // коричневый — дубовые залы герцогства
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_male",
  name: "Его Величество",
  color: "#ffd700", // золото — королевская корона
  state: "prefix"
},
{
  id: "king_feudal_female",
  name: "Её Величество",
  color: "#ffd700", // золото — королевская корона
  state: "prefix"
},
// =============== ANGLO-SAXON FEUDAL ===============
// Tier1
{
  id: "baron_feudal_anglosaxon",
  name: "Тан",
  color: "#5d4037", // тёмно-коричневый — земля и дружина
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_anglosaxon_male",
  name: "Эорл",
  color: "#795548", // кожаный — доспехи и власть
  state: "prefix"
},
{
  id: "count_feudal_anglosaxon_female",
  name: "Эорлина",
  color: "#795548", // кожаный — доспехи и власть
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_anglosaxon_male",
  name: "Элдорман",
  color: "#3e2723", // уголь — мудрость старейшины
  state: "prefix"
},
{
  id: "duke_feudal_anglosaxon_female",
  name: "Элдорманисса",
  color: "#3e2723", // уголь — мудрость старейшины
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_anglosaxon",
  name: "Бретвальда",
  color: "#c62828", // алый — верховная воинская власть
  state: "prefix"
},
// =============== GREEK FEUDAL ===============
// Tier1
{
  id: "baron_feudal_greek_male",
  name: "Стратиг",
  color: "#2a5c5c", // тёмная бирюза — морская мощь
  state: "prefix"
},
{
  id: "baron_feudal_greek_female",
  name: "Стратигисса",
  color: "#2a5c5c", // тёмная бирюза — морская мощь
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_greek_male",
  name: "Экзарх",
  color: "#5c4a2a", // охра — византийская земля
  state: "prefix"
},
{
  id: "count_feudal_greek_female",
  name: "Экзархесса",
  color: "#5c4a2a", // охра — византийская земля
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_greek_male",
  name: "Деспот",
  color: "#5c2a4a", // тёмно-фиолетовый — византийская роскошь
  state: "prefix"
},
{
  id: "duke_feudal_greek_female",
  name: "Деспотина",
  color: "#5c2a4a", // тёмно-фиолетовый — византийская роскошь
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_greek_male",
  name: "Василевс",
  color: "#d4a017", // золотисто-жёлтый — императорская мантия
  state: "prefix"
},
{
  id: "king_feudal_greek_female",
  name: "Василиса",
  color: "#d4a017", // золотисто-жёлтый — императорская мантия
  state: "prefix"
},
// =============== MONGOL FEUDAL ===============
// Tier1
{
  id: "baron_feudal_mongol_male",
  name: "Нойон",
  color: "#7a5c48", // тёплый коричневый — войлок и седло
  state: "prefix"
},
{
  id: "baron_feudal_mongol_female",
  name: "Нойон-бэгичи",
  color: "#7a5c48", // тёплый коричневый — войлок и седло
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_mongol_male",
  name: "Тайши",
  color: "#a67c52", // бронзовый — знатность и род
  state: "prefix"
},
{
  id: "count_feudal_mongol_female",
  name: "Тайши-бэгичи",
  color: "#a67c52", // бронзовый — знатность и род
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_mongol_male",
  name: "Беклярбеки",
  color: "#c69c6d", // светлое золото — командование армией
  state: "prefix"
},
{
  id: "duke_feudal_mongol_female",
  name: "Беклярбеки-бэгичи",
  color: "#c69c6d", // светлое золото — командование армией
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_mongol_male",
  name: "Великий Хан",
  color: "#e6c27a", // янтарь — сияние империи
  state: "prefix"
},
{
  id: "king_feudal_mongol_female",
  name: "Великая Хатун",
  color: "#e6c27a", // янтарь — сияние империи
  state: "prefix"
},
// =============== MUGHAL FEUDAL ===============
// Tier1
{
  id: "baron_feudal_mughal_male",
  name: "Фаудждар",
  color: "#8b4513", // тёплый коричневый — гарнизон и порядок
  state: "prefix"
},
{
  id: "baron_feudal_mughal_female",
  name: "Фаудждари",
  color: "#8b4513", // тёплый коричневый — гарнизон и порядок
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_mughal_male",
  name: "Субедар",
  color: "#b22222", // багровый — власть провинции
  state: "prefix"
},
{
  id: "count_feudal_mughal_female",
  name: "Субедари",
  color: "#b22222", // багровый — власть провинции
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_mughal_male",
  name: "Наваб",
  color: "#4b0082", // индиго — благородство и роскошь
  state: "prefix"
},
{
  id: "duke_feudal_mughal_female",
  name: "Бегум",
  color: "#4b0082", // индиго — благородство и роскошь
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_mughal_male",
  name: "Падишах",
  color: "#ffd700", // золото — императорская корона
  state: "prefix"
},
{
  id: "king_feudal_mughal_female",
  name: "Падишах Бегум",
  color: "#ffd700", // золото — императорская корона
  state: "prefix"
},
// =============== NORSE FEUDAL ===============
// Tier1
{
  id: "baron_feudal_norse_male",
  name: "Хускарл",
  color: "#7a5c48", // тёплый коричневый — щит и доспехи
  state: "prefix"
},
{
  id: "baron_feudal_norse_female",
  name: "Хусквина",
  color: "#7a5c48", // тёплый коричневый — щит и доспехи
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_norse_male",
  name: "Ярл",
  color: "#a67c52", // бронзовый — золото и власть ярла
  state: "prefix"
},
{
  id: "count_feudal_norse_female",
  name: "Ярлина",
  color: "#a67c52", // бронзовый — золото и власть ярла
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_norse_male",
  name: "Конунгр",
  color: "#c69c6d", // светлое золото — королевский двор
  state: "prefix"
},
{
  id: "duke_feudal_norse_female",
  name: "Дроттнинг",
  color: "#c69c6d", // светлое золото — королевский двор
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_norse_male",
  name: "Великий Конунгр",
  color: "#e6c27a", // янтарь — солнце севера и величие
  state: "prefix"
},
{
  id: "king_feudal_norse_female",
  name: "Великая Дроттнинг",
  color: "#e6c27a", // янтарь — солнце севера и величие
  state: "prefix"
},
// =============== ROMAN FEUDAL ===============
// Tier1
{
  id: "baron_feudal_roman",
  name: "Губернатор",
  color: "#6a5acd", // индиго — римская провинциальная власть
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_roman_male",
  name: "Комес",
  color: "#8b0000", // тёмно-бордовый — пурпурная кайма
  state: "prefix"
},
{
  id: "count_feudal_roman_female",
  name: "Комитисса",
  color: "#8b0000", // тёмно-бордовый — пурпурная кайма
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_roman_male",
  name: "Дукс",
  color: "#4b0082", // тёмно-фиолетовый — военное командование
  state: "prefix"
},
{
  id: "duke_feudal_roman_female",
  name: "Дукисса",
  color: "#4b0082", // тёмно-фиолетовый — военное командование
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_roman_male",
  name: "Рекс",
  color: "#da70d6", // орхидея — царственное величие
  state: "prefix"
},
{
  id: "king_feudal_roman_female",
  name: "Регина",
  color: "#da70d6", // орхидея — царственное величие
  state: "prefix"
},
// =============== SERBIAN FEUDAL ===============
// Tier1
{
  id: "baron_feudal_serbian_male",
  name: "Кнез",
  color: "#5d4037", // тёмно-коричневый — земля и замок местного правителя
  state: "prefix"
},
{
  id: "baron_feudal_serbian_female",
  name: "Кнежица",
  color: "#5d4037", // тёмно-коричневый — земля и замок местного правителя
  state: "prefix"
},
// Tier2
{
  id: "count_feudal_serbian_male",
  name: "Жупан",
  color: "#795548", // кожаный — власть над жупой (областью)
  state: "prefix"
},
{
  id: "count_feudal_serbian_female",
  name: "Жупаница",
  color: "#795548", // кожаный — власть над жупой (областью)
  state: "prefix"
},
// Tier3
{
  id: "duke_feudal_serbian_male",
  name: "Воевода",
  color: "#a67c52", // бронзовый — военачальник и защитник земли
  state: "prefix"
},
{
  id: "duke_feudal_serbian_female",
  name: "Воеводица",
  color: "#a67c52", // бронзовый — военачальник и защитник земли
  state: "prefix"
},
// Tier4
{
  id: "king_feudal_serbian_male",
  name: "Царь",
  color: "#ffd700", // золото — императорская корона Сербии
  state: "prefix"
},
{
  id: "king_feudal_serbian_female",
  name: "Царица",
  color: "#ffd700", // золото — императорская корона Сербии
  state: "prefix"
},
// =============================================================================
// =============================== THEOCRACY ===================================
// =============================================================================
// =============== THEOCRACY (универсальное) ===============
// Tier1
{
  id: "baron_theocracy_male",
  name: "Жрец",
  color: "#5d4037", // тёмно-коричневый — древесина алтаря
  state: "prefix"
},
{
  id: "baron_theocracy_female",
  name: "Жрица",
  color: "#5d4037", // тёмно-коричневый — древесина алтаря
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy",
  name: "Пророк",
  color: "#3e2723", // угольно-чёрный — голос из тьмы
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_male",
  name: "Первосвященник",
  color: "#8d6e63", // тёплый беж — священные ткани
  state: "prefix"
},
{
  id: "duke_theocracy_female",
  name: "Первосвященница",
  color: "#8d6e63", // тёплый беж — священные ткани
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_male",
  name: "Святой",
  color: "#d4af37", // золото — божественное сияние
  state: "prefix"
},
{
  id: "king_theocracy_female",
  name: "Святая",
  color: "#d4af37", // золото — божественное сияние
  state: "prefix"
},
// =============== ANGLO-SAXON THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_anglosaxon_male",
  name: "Витега",
  color: "#4a4a3a", // тёмно-оливковый — священный дуб
  state: "prefix"
},
{
  id: "baron_theocracy_anglosaxon_female",
  name: "Вичча",
  color: "#4a4a3a", // тёмно-оливковый — священный дуб
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_anglosaxon",
  name: "Хеаргвард",
  color: "#6a6a5a", // серо-зелёный — храмовый холм
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_anglosaxon_male",
  name: "Хеавичча",
  color: "#9a9a7a", // светло-серый — дым жертвоприношений
  state: "prefix"
},
{
  id: "duke_theocracy_anglosaxon_female",
  name: "Хеавичче",
  color: "#9a9a7a", // светло-серый — дым жертвоприношений
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_anglosaxon_male",
  name: "Избранник Водана",
  color: "#d6d6c0", // перламутровый — небесный свет
  state: "prefix"
},
{
  id: "king_theocracy_anglosaxon_female",
  name: "Избранница Фригг",
  color: "#d6d6c0", // перламутровый — небесный свет
  state: "prefix"
},
// =============== GREEK THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_greek_male",
  name: "Мистагог",
  color: "#5c4a5c", // тёмно-лиловый — тайны Элевсинских мистерий
  state: "prefix"
},
{
  id: "baron_theocracy_greek_female",
  name: "Мистагога",
  color: "#5c4a5c", // тёмно-лиловый — тайны Элевсинских мистерий
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_greek",
  name: "Иерокерукс",
  color: "#7a6a8a", // серо-фиолетовый — голос священного глашатая
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_greek",
  name: "Иерофант",
  color: "#b09ab0", // лавандовый — посвящение в тайны
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_greek_male",
  name: "Избранник Деметры",
  color: "#e6d6f0", // бледно-лиловый — божественная милость
  state: "prefix"
},
{
  id: "king_theocracy_greek_female",
  name: "Избранница Персефоны",
  color: "#e6d6f0", // бледно-лиловый — божественная милость
  state: "prefix"
},
// =============== MONGOL THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_mongol_male",
  name: "Бёу",
  color: "#5d4037", // тёмно-коричневый — шаманский барабан
  state: "prefix"
},
{
  id: "baron_theocracy_mongol_female",
  name: "Идэш",
  color: "#5d4037", // тёмно-коричневый — шаманский барабан
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_mongol",
  name: "Тэнгричи",
  color: "#795548", // кожаный — служитель Неба
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_mongol_male",
  name: "Богдо",
  color: "#8d6e63", // тёплый беж — святой учитель
  state: "prefix"
},
{
  id: "duke_theocracy_mongol_female",
  name: "Далай Идэш",
  color: "#8d6e63", // тёплый беж — святой учитель
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_mongol_male",
  name: "Избранник Тэнгри",
  color: "#d4af37", // золото — сияние Вечного Неба
  state: "prefix"
},
{
  id: "king_theocracy_mongol_female",
  name: "Избранница Эрлиг-Хатун",
  color: "#d4af37", // золото — сияние Вечного Неба
  state: "prefix"
},
// =============== MUGHAL THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_mughal_male",
  name: "Пир",
  color: "#8b0000", // тёмно-бордовый — духовный наставник
  state: "prefix"
},
{
  id: "baron_theocracy_mughal_female",
  name: "Пирани",
  color: "#8b0000", // тёмно-бордовый — духовный наставник
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_mughal",
  name: "Кади",
  color: "#a0522d", // терракота — судья шариата
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_mughal_male",
  name: "Шейх",
  color: "#cd853f", // персиково-золотой — суфийский учитель
  state: "prefix"
},
{
  id: "duke_theocracy_mughal_female",
  name: "Шейха",
  color: "#cd853f", // персиково-золотой — суфийский учитель
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_mughal_male",
  name: "Зиллуллах",
  color: "#ff4500", // оранжево-красный — «Тень Аллаха на земле»
  state: "prefix"
},
{
  id: "king_theocracy_mughal_female",
  name: "Зиллатуллах",
  color: "#ff4500", // оранжево-красный — «Тень Аллаха на земле»
  state: "prefix"
},
// =============== NORSE THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_norse_male",
  name: "Сёйдмадр",
  color: "#3a3f5c", // тёмно-синий — северное небо ночью
  state: "prefix"
},
{
  id: "baron_theocracy_norse_female",
  name: "Спакона",
  color: "#3a3f5c", // тёмно-синий — северное небо ночью
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_norse",
  name: "Готи",
  color: "#5a4f6c", // индиго — священный закон
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_norse_male",
  name: "Верховный Готи",
  color: "#8a7f9c", // серо-лиловый — авторитет храма
  state: "prefix"
},
{
  id: "duke_theocracy_norse_female",
  name: "Верховная Спакона",
  color: "#8a7f9c", // серо-лиловый — авторитет храма
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_norse_male",
  name: "Избранник Одина",
  color: "#d4c1ec", // бледно-лиловый — божественное избрание
  state: "prefix"
},
{
  id: "king_theocracy_norse_female",
  name: "Избранница Фрейи",
  color: "#d4c1ec", // бледно-лиловый — божественное избрание
  state: "prefix"
},
// =============== ROMAN THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_roman_male",
  name: "Фламин",
  color: "#8b4513", // сиена — римский алтарь
  state: "prefix"
},
{
  id: "baron_theocracy_roman_female",
  name: "Фламина",
  color: "#8b4513", // сиена — римский алтарь
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_roman_male",
  name: "Понтифик",
  color: "#800080", // пурпур — священная власть
  state: "prefix"
},
{
  id: "count_theocracy_roman_female",
  name: "Понтифика",
  color: "#800080", // пурпур — священная власть
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_roman_male",
  name: "Понтифекс Максимус",
  color: "#d4af37", // золото — глава культа
  state: "prefix"
},
{
  id: "duke_theocracy_roman_female",
  name: "Понтифика Максима",
  color: "#d4af37", // золото — глава культа
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_roman_male",
  name: "Дивус",
  color: "#ff0000", // алый — обожествлённый император
  state: "prefix"
},
{
  id: "king_theocracy_roman_female",
  name: "Дива",
  color: "#ff0000", // алый — обожествлённый император
  state: "prefix"
},
// =============== SERBIAN THEOCRACY ===============
// Tier1
{
  id: "baron_theocracy_serbian_male",
  name: "Игуман",
  color: "#4a3a2a", // тёмно-коричневый — стены монастыря и уединение
  state: "prefix"
},
{
  id: "baron_theocracy_serbian_female",
  name: "Игумания",
  color: "#4a3a2a", // тёмно-коричневый — стены монастыря и уединение
  state: "prefix"
},
// Tier2
{
  id: "count_theocracy_serbian",
  name: "Архимандрит",
  color: "#6a5a4a", // серо-коричневый — старший настоятель крупного монастыря
  state: "prefix"
},
// Tier3
{
  id: "duke_theocracy_serbian_male",
  name: "Митрополит",
  color: "#9a8a7a", // светло-серый — столичная епархия и духовное руководство
  state: "prefix"
},
{
  id: "duke_theocracy_serbian_female",
  name: "Митрополитиня",
  color: "#9a8a7a", // светло-серый — столичная епархия и духовное руководство
  state: "prefix"
},
// Tier4
{
  id: "king_theocracy_serbian_male",
  name: "Патриарх",
  color: "#d4af37", // золото — глава автокефальной Сербской церкви
  state: "prefix"
},
{
  id: "king_theocracy_serbian_female",
  name: "Патриаршина",
  color: "#d4af37", // золото — глава автокефальной Сербской церкви
  state: "prefix"
},
// ANGLOSAXON
  {
    id: "baron_magic_anglosaxon_male",
    name: "Лек",
    color: "#5d4037", // тёмно-коричневый — травы и дерево
    state: "prefix"
  },
  {
    id: "baron_magic_anglosaxon_female",
    name: "Лекиня",
    color: "#5d4037",
    state: "prefix"
  },
  {
    id: "count_magic_anglosaxon_male",
    name: "Скриман",
    color: "#795548", // кожаный — руны и обряды
    state: "prefix"
  },
  {
    id: "count_magic_anglosaxon_female",
    name: "Скриманка",
    color: "#795548",
    state: "prefix"
  },
  {
    id: "duke_magic_anglosaxon_male",
    name: "Мунн",
    color: "#3e2723", // уголь — шепот духов
    state: "prefix"
  },
  {
    id: "duke_magic_anglosaxon_female",
    name: "Мунница",
    color: "#3e2723",
    state: "prefix"
  },
  
  // CELTIC
  {
    id: "baron_magic_celtic_male",
    name: "Оват",
    color: "#2e7d32", // тёмно-зелёный — священные рощи
    state: "prefix"
  },
  {
    id: "baron_magic_celtic_female",
    name: "Оватка",
    color: "#2e7d32",
    state: "prefix"
  },
  {
    id: "count_magic_celtic_male",
    name: "Бард",
    color: "#4caf50", // зелёный — голос природы
    state: "prefix"
  },
  {
    id: "count_magic_celtic_female",
    name: "Банфи",
    color: "#4caf50",
    state: "prefix"
  },
  {
    id: "duke_magic_celtic_male",
    name: "Друид",
    color: "#1b5e20", // изумрудно-тёмный — мудрость дуба
    state: "prefix"
  },
  {
    id: "duke_magic_celtic_female",
    name: "Друидесса",
    color: "#1b5e20",
    state: "prefix"
  },
  {
    id: "king_magic_celtic_male",
    name: "Архидруид",
    color: "#a5d6a7", // светло-зелёный — верховный жрец леса
    state: "prefix"
  },
  {
    id: "king_magic_celtic_female",
    name: "Архидруидесса",
    color: "#a5d6a7",
    state: "prefix"
  },

  // CHINESE
  {
    id: "baron_magic_chinese_male",
    name: "Фанши",
    color: "#c62828", // алый — даосская алхимия
    state: "prefix"
  },
  {
    id: "baron_magic_chinese_female",
    name: "Фанши",
    color: "#c62828",
    state: "prefix"
  },
  {
    id: "count_magic_chinese_male",
    name: "Даоши",
    color: "#ff6f00", // оранжево-золотой — путь Дао
    state: "prefix"
  },
  {
    id: "count_magic_chinese_female",
    name: "Даоши",
    color: "#ff6f00",
    state: "prefix"
  },
  {
    id: "duke_magic_chinese_male",
    name: "Ляньданьши",
    color: "#b71c1c", // тёмно-красный — мастер эликсира бессмертия
    state: "prefix"
  },
  {
    id: "duke_magic_chinese_female",
    name: "Ляньданьши",
    color: "#b71c1c",
    state: "prefix"
  },
  {
    id: "king_magic_chinese_male",
    name: "Чжэньжэнь",
    color: "#ffd54f", // янтарно-золотой — истинный человек, бессмертный
    state: "prefix"
  },
  {
    id: "king_magic_chinese_female",
    name: "Чжэньжэнь",
    color: "#ffd54f",
    state: "prefix"
  },

  // ARABIC
  {
    id: "baron_magic_arabic_male",
    name: "Хаким",
    color: "#5d4037", // коричневый — мудрость и медицина
    state: "prefix"
  },
  {
    id: "baron_magic_arabic_female",
    name: "Хакима",
    color: "#5d4037",
    state: "prefix"
  },
  {
    id: "count_magic_arabic_male",
    name: "Мунаджжим",
    color: "#1a237e", // тёмно-синий — звёзды и астрология
    state: "prefix"
  },
  {
    id: "count_magic_arabic_female",
    name: "Мунаджжима",
    color: "#1a237e",
    state: "prefix"
  },
  {
    id: "duke_magic_arabic_male",
    name: "Алхимик",
    color: "#311b92", // индиго — тайны трансмутации
    state: "prefix"
  },
  {
    id: "duke_magic_arabic_female",
    name: "Алхимичка",
    color: "#311b92",
    state: "prefix"
  },
  {
    id: "king_magic_arabic_male",
    name: "Хаким аль-Хикма",
    color: "#e0e0e0", // серебристо-белый — вершина мудрости
    state: "prefix"
  },
  {
    id: "king_magic_arabic_female",
    name: "Хакимат аль-Хикма",
    color: "#e0e0e0",
    state: "prefix"
  },

// Англосаксонская культура
  {
    id: "huscarl_warrior_anglosaxon",
    name: "Хускарл",
    color: "#795548", // кожаный — доспехи и верность
    state: "prefix"
  },
  {
    id: "scop_warrior_anglosaxon",
    name: "Скоп",
    color: "#5d4037", // тёмно-коричневый — дубовые залы и песни
    state: "prefix"
  },

  // 🏛️ Греческая культура
  {
    id: "hoplite_warrior_greek",
    name: "Гоплит",
    color: "#2a5c5c", // тёмная бирюза — фаланга и морская мощь
    state: "prefix"
  },

  // 🐎 Монгольская культура
  {
    id: "keshik_warrior_mongol",
    name: "Кешик",
    color: "#a67c52", // бронзовый — элита Великого Хана
    state: "prefix"
  },

  // 🕌 Могольская культура
  {
    id: "ghulam_warrior_mughal",
    name: "Гулам",
    color: "#b22222", // багровый — элитный раб-воин
    state: "prefix"
  },

  // ⚓ Скандинавская культура
  {
    id: "berserker_warrior_norse",
    name: "Берсерк",
    color: "#c62828", // алый — ярость без доспехов
    state: "prefix"
  },
  {
    id: "skald_warrior_norse",
    name: "Скальд",
    color: "#4a6b6b", // серо-бирюзовый — песни о подвигах
    state: "prefix"
  },

  // 🕊️ Сербская культура
  {
    id: "guslar_warrior_serbian",
    name: "Гусляр",
    color: "#6b5b4b", // землистый коричневый — гусляры и эпос
    state: "prefix"
  },

  // Гладиаторы
  {
    id: "murmillo_warrior_roman",
    name: "Мурмиллон",
    color: "#8B4513", // коричневый — римская земля и кожа доспехов
    state: "prefix"
  },
  {
    id: "retiarius_warrior_roman",
    name: "Ретиарий",
    color: "#4682B4", // стальной синий — холодный блеск трезубца
    state: "prefix"
  },
  {
    id: "eques_warrior_roman",
    name: "Эквит",
    color: "#DAA520", // золотистый — блеск конного вступления
    state: "prefix"
  },
  {
    id: "bestiarius_warrior_roman",
    name: "Бестиарий",
    color: "#A0522D", // терракота — песок арены и звериная ярость
    state: "prefix"
  },
  {
    id: "venator_warrior_roman",
    name: "Венатор",
    color: "#CD853F", // персиково-золотой — мастерство охотника и зрелищная слава
    state: "prefix"
  }
];