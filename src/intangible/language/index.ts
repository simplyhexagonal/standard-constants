import { CountryCode } from "../../place/country";

// ISO 639-1 compliant
export enum LanguageName {
  aa = 'Afaraf',
  ab = 'аҧсуа бызшәа, аҧсшәа',
  ae = 'avesta',
  af = 'Afrikaans',
  ak = 'Akan',
  am = 'አማርኛ',
  an = 'aragonés',
  ar = 'العربية',
  as = 'অসমীয়া',
  av = 'авар мацӀ, магӀарул мацӀ',
  ay = 'aymar aru',
  az = 'azərbaycan dili, تۆرکجه',
  ba = 'башҡорт теле',
  be = 'беларуская мова',
  bg = 'български език',
  bi = 'Bislama',
  bm = 'bamanankan',
  bn = 'বাংলা',
  bo = 'བོད་ཡིག',
  br = 'brezhoneg',
  bs = 'bosanski jezik',
  ca = 'català, valencià',
  ce = 'нохчийн мотт',
  ch = 'Chamoru',
  co = 'corsu, lingua corsa',
  cr = 'ᓀᐦᐃᔭᐍᐏᐣ',
  cs = 'čeština, český jazyk',
  cu = 'ѩзыкъ словѣньскъ',
  cv = 'чӑваш чӗлхи',
  cy = 'Cymraeg',
  da = 'dansk',
  de = 'Deutsch',
  dv = 'ދިވެހި',
  dz = 'རྫོང་ཁ',
  ee = 'Eʋegbe',
  el = 'ελληνικά',
  en = 'English',
  eo = 'Esperanto',
  es = 'Español',
  et = 'eesti, eesti keel',
  eu = 'euskara, euskera',
  fa = 'فارسی',
  ff = 'Fulfulde, Pulaar, Pular',
  fi = 'suomi, suomen kieli',
  fj = 'vosa Vakaviti',
  fo = 'føroyskt',
  fr = 'français',
  fy = 'Frysk',
  ga = 'Gaeilge',
  gd = 'Gàidhlig',
  gl = 'Galego',
  gn = 'Avañe\'ẽ',
  gu = 'ગુજરાતી',
  gv = 'Gaelg, Gailck',
  ha = '(Hausa) هَوُسَ',
  he = 'עברית',
  hi = 'हिन्दी, हिंदी',
  ho = 'Hiri Motu',
  hr = 'hrvatski jezik',
  ht = 'Kreyòl ayisyen',
  hu = 'magyar',
  hy = 'Հայերեն',
  hz = 'Otjiherero',
  ia = 'Interlingua',
  id = 'Bahasa Indonesia',
  ie = '(originally:) Occidental, (after WWII:) Interlingue',
  ig = 'Asụsụ Igbo',
  ii = 'ꆈꌠ꒿ Nuosuhxop',
  ik = 'Iñupiaq, Iñupiatun',
  io = 'Ido',
  is = 'Íslenska',
  it = 'Italiano',
  iu = 'ᐃᓄᒃᑎᑐᑦ',
  ja = '日本語 (にほんご)',
  jv = 'ꦧꦱꦗꦮ, Basa Jawa',
  ka = 'ქართული',
  kg = 'Kikongo',
  ki = 'Gĩkũyũ',
  kj = 'Kuanyama',
  kk = 'қазақ тілі',
  kl = 'kalaallisut, kalaallit oqaasii',
  km = 'ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ',
  kn = 'ಕನ್ನಡ',
  ko = '한국어',
  kr = 'Kanuri',
  ks = 'कॉशुर, کٲشُر‎',
  ku = 'Kurdî, کوردی‎',
  kv = 'коми кыв',
  kw = 'Kernewek',
  ky = 'Кыргызча, Кыргыз тили',
  la = 'latine, lingua latina',
  lb = 'Lëtzebuergesch',
  lg = 'Luganda',
  li = 'Limburgs',
  ln = 'Lingála',
  lo = 'ພາສາລາວ',
  lt = 'lietuvių kalba',
  lu = 'Kiluba',
  lv = 'latviešu valoda',
  mg = 'fiteny malagasy',
  mh = 'Kajin M̧ajeļ',
  mi = 'te reo Māori',
  mk = 'македонски јазик',
  ml = 'മലയാളം',
  mn = 'Монгол хэл',
  mr = 'मराठी',
  ms = 'Bahasa Melayu, بهاس ملايو‎',
  mt = 'Malti',
  my = 'ဗမာစာ',
  na = 'Dorerin Naoero',
  nb = 'Norsk Bokmål',
  nd = 'isiNdebele',
  ne = 'नेपाली',
  ng = 'Owambo',
  nl = 'Nederlands, Vlaams',
  nn = 'Norsk Nynorsk',
  no = 'Norsk',
  nr = 'isiNdebele',
  nv = 'Diné bizaad',
  ny = 'chiCheŵa, chinyanja',
  oc = 'occitan, lenga d\'òc',
  oj = 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  om = 'Afaan Oromoo',
  or = 'ଓଡ଼ିଆ',
  os = 'ирон ӕвзаг',
  pa = 'ਪੰਜਾਬੀ, پنجابی‎',
  pi = 'पालि, पाळि',
  pl = 'język polski, polszczyzna',
  ps = 'پښتو',
  pt = 'Português',
  qu = 'Runa Simi, Kichwa',
  rm = 'Rumantsch Grischun',
  rn = 'Ikirundi',
  ro = 'Română, Moldovenească',
  ru = 'русский',
  rw = 'Ikinyarwanda',
  sa = 'संस्कृतम्, 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌮𑍍',
  sc = 'sardu',
  sd = 'सिंधी, سنڌي‎',
  se = 'Davvisámegiella',
  sg = 'yângâ tî sängö',
  si = 'සිංහල',
  sk = 'Slovenčina, Slovenský jazyk',
  sl = 'Slovenski jezik, Slovenščina',
  sm = 'gagana fa\'a Samoa',
  sn = 'chiShona',
  so = 'Soomaaliga, af Soomaali',
  sq = 'Shqip',
  sr = 'српски језик',
  ss = 'SiSwati',
  st = 'Sesotho',
  su = 'Basa Sunda',
  sv = 'Svenska',
  sw = 'Kiswahili',
  ta = 'தமிழ்',
  te = 'తెలుగు',
  tg = 'тоҷикӣ, toçikī, تاجیکی‎',
  th = 'ไทย',
  ti = 'ትግርኛ',
  tk = 'Türkmençe, Türkmen dili',
  tl = 'Wikang Tagalog',
  tn = 'Setswana',
  to = 'Faka Tonga',
  tr = 'Türkçe',
  ts = 'Xitsonga',
  tt = 'татар теле, tatar tele',
  tw = 'Twi',
  ty = 'Reo Tahiti',
  ug = 'ئۇيغۇرچە‎, Uyghurche',
  uk = 'Українська',
  ur = 'اردو',
  uz = 'Oʻzbek, Ўзбек, أۇزبېك‎',
  ve = 'Tshivenḓa',
  vi = 'Tiếng Việt',
  vo = 'Volapük',
  wa = 'Walon',
  wo = 'Wollof',
  xh = 'isiXhosa',
  yi = 'ייִדיש',
  yo = 'Yorùbá',
  za = 'Saɯ cueŋƅ, Saw cuengh',
  zh = '中文 (Zhōngwén), 汉语, 漢語',
  zu = 'isiZulu',
}

export const LANGUAGE_NAMES = {...LanguageName};

// ISO 639-1 compliant
export enum LanguageCode {
  Abkhazian = 'ab',
  Afar = 'aa',
  Afrikaans = 'af',
  Akan = 'ak',
  Albanian = 'sq',
  Amharic = 'am',
  Arabic = 'ar',
  Aragonese = 'an',
  Armenian = 'hy',
  Assamese = 'as',
  Avaric = 'av',
  Avestan = 'ae',
  Aymara = 'ay',
  Azerbaijani = 'az',
  Bambara = 'bm',
  Bashkir = 'ba',
  Basque = 'eu',
  Belarusian = 'be',
  Bengali = 'bn',
  Bislama = 'bi',
  Bosnian = 'bs',
  Breton = 'br',
  Bulgarian = 'bg',
  Burmese = 'my',
  Catalan = 'ca',
  Valencian = 'ca',
  Chamorro = 'ch',
  Chechen = 'ce',
  Chichewa = 'ny',
  Chewa = 'ny',
  Nyanja = 'ny',
  Chinese = 'zh',
  Chuvash = 'cv',
  Cornish = 'kw',
  Corsican = 'co',
  Cree = 'cr',
  Croatian = 'hr',
  Czech = 'cs',
  Danish = 'da',
  Divehi = 'dv',
  Dhivehi = 'dv',
  Maldivian = 'dv',
  Dutch = 'nl',
  Flemish = 'nl',
  Dzongkha = 'dz',
  English = 'en',
  Esperanto = 'eo',
  Estonian = 'et',
  Ewe = 'ee',
  Faroese = 'fo',
  Fijian = 'fj',
  Finnish = 'fi',
  French = 'fr',
  Fulah = 'ff',
  Galician = 'gl',
  Georgian = 'ka',
  German = 'de',
  Greek = 'el',
  Guarani = 'gn',
  Gujarati = 'gu',
  Haitian = 'ht',
  HaitianCreole = 'ht',
  Hausa = 'ha',
  Hebrew = 'he',
  Herero = 'hz',
  Hindi = 'hi',
  HiriMotu = 'ho',
  Hungarian = 'hu',
  Interlingua = 'ia',
  Indonesian = 'id',
  Interlingue = 'ie',
  Occidental = 'ie',
  Irish = 'ga',
  Igbo = 'ig',
  Inupiaq = 'ik',
  Ido = 'io',
  Icelandic = 'is',
  Italian = 'it',
  Inuktitut = 'iu',
  Japanese = 'ja',
  Javanese = 'jv',
  Kalaallisut = 'kl',
  Greenlandic = 'kl',
  Kannada = 'kn',
  Kanuri = 'kr',
  Kashmiri = 'ks',
  Kazakh = 'kk',
  CentralKhmer = 'km',
  Kikuyu = 'ki',
  Gikuyu = 'ki',
  Kinyarwanda = 'rw',
  Kirghiz = 'ky',
  Kyrgyz = 'ky',
  Komi = 'kv',
  Kongo = 'kg',
  Korean = 'ko',
  Kurdish = 'ku',
  Kuanyama = 'kj',
  Kwanyama = 'kj',
  Latin = 'la',
  Luxembourgish = 'lb',
  Letzeburgesch = 'lb',
  Ganda = 'lg',
  Limburgan = 'li',
  Limburger = 'li',
  Limburgish = 'li',
  Lingala = 'ln',
  Lao = 'lo',
  Lithuanian = 'lt',
  LubaKatanga = 'lu',
  Latvian = 'lv',
  Manx = 'gv',
  Macedonian = 'mk',
  Malagasy = 'mg',
  Malay = 'ms',
  Malayalam = 'ml',
  Maltese = 'mt',
  Maori = 'mi',
  Marathi = 'mr',
  Marshallese = 'mh',
  Mongolian = 'mn',
  Nauru = 'na',
  Navajo = 'nv',
  Navaho = 'nv',
  NorthNdebele = 'nd',
  Nepali = 'ne',
  Ndonga = 'ng',
  NorwegianBokmal = 'nb',
  NorwegianNynorsk = 'nn',
  Norwegian = 'no',
  SichuanYi = 'ii',
  Nuosu = 'ii',
  SouthNdebele = 'nr',
  Occitan = 'oc',
  Ojibwa = 'oj',
  ChurchSlavic = 'cu',
  OldSlavonic = 'cu',
  OldBulgarian = 'cu',
  Oromo = 'om',
  Oriya = 'or',
  Ossetian = 'os',
  Ossetic = 'os',
  Punjabi = 'pa',
  Panjabi = 'pa',
  Pali = 'pi',
  Persian = 'fa',
  Polish = 'pl',
  Pashto = 'ps',
  Pushto = 'ps',
  Portuguese = 'pt',
  Quechua = 'qu',
  Romansh = 'rm',
  Rundi = 'rn',
  Romanian = 'ro',
  Moldavian = 'ro',
  Moldovan = 'ro',
  Russian = 'ru',
  Sanskrit = 'sa',
  Sardinian = 'sc',
  Sindhi = 'sd',
  NorthernSami = 'se',
  Samoan = 'sm',
  Sango = 'sg',
  Serbian = 'sr',
  Gaelic = 'gd',
  ScottishGaelic = 'gd',
  Shona = 'sn',
  Sinhala = 'si',
  Sinhalese = 'si',
  Slovak = 'sk',
  Slovenian = 'sl',
  Somali = 'so',
  SouthernSotho = 'st',
  Spanish = 'es',
  Castilian = 'es',
  Sundanese = 'su',
  Swahili = 'sw',
  Swati = 'ss',
  Swedish = 'sv',
  Tamil = 'ta',
  Telugu = 'te',
  Tajik = 'tg',
  Thai = 'th',
  Tigrinya = 'ti',
  Tibetan = 'bo',
  Turkmen = 'tk',
  Tagalog = 'tl',
  Tswana = 'tn',
  Tonga = 'to',
  Turkish = 'tr',
  Tsonga = 'ts',
  Tatar = 'tt',
  Twi = 'tw',
  Tahitian = 'ty',
  Uighur = 'ug',
  Uyghur = 'ug',
  Ukrainian = 'uk',
  Urdu = 'ur',
  Uzbek = 'uz',
  Venda = 've',
  Vietnamese = 'vi',
  Volapuk = 'vo',
  Walloon = 'wa',
  Welsh = 'cy',
  Wolof = 'wo',
  WesternFrisian = 'fy',
  Xhosa = 'xh',
  Yiddish = 'yi',
  Yoruba = 'yo',
  Zhuang = 'za',
  Chuang = 'za',
  Zulu = 'zu',
}

export const LANGUAGE_CODES = {...LanguageCode};

export enum LanguageSkillLevel {
  BELOW_BASIC = 'BELOW_BASIC',
  BASIC = 'BASIC',
  LOW_INTERMEDIATE = 'LOW_INTERMEDIATE',
  HIGH_INTERMEDIATE = 'HIGH_INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export interface LanguageSkill {
  reading: LanguageSkillLevel;
  listening: LanguageSkillLevel;
  speaking: LanguageSkillLevel;
  writing: LanguageSkillLevel;
}

export interface Language {
  code: LanguageCode;
  region?: CountryCode;
  skill?: LanguageSkill;
}
