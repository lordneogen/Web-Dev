export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  img:string;

  url:string;

  type:number;
}


export const products = [

  {
    id: 0,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 44990,
    description: 'технология NFC: Нет\n' +
      'цвет: черный\n' +
      'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
      'диагональ: 6.5 дюйм\n' +
      'размер оперативной памяти: 2 ГБ\n' +
      'процессор: 8-ядерный Unisoc SC9863A\n' +
      'объем встроенной памяти: 32 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=113220100#!/item',
    type:1,
    like:0
  },
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ медный',
    price: 46000,
    description: 'технология NFC: Нет\n' +
      'цвет: бронзовый\n' +
      'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
      'диагональ: 6.5 дюйм\n' +
      'размер оперативной памяти: 2 ГБ\n' +
      'процессор: 8-ядерный Unisoc SC9863A\n' +
      'объем встроенной памяти: 32 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-mednyi-105772530/?c=113220100#!/item',
    type:1,
    like:0
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ серый',
    price: 39000,
    description: 'технология NFC: Нет\n' +
      'цвет: серый\n' +
      'тип экрана: сенсорный, мультитач, IPS\n' +
      'диагональ: 6.53 дюйм\n' +
      'размер оперативной памяти: 2 ГБ\n' +
      'процессор: 8-ядерный MediaTek Helio G25\n' +
      'объем встроенной памяти: 32 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h2d/31501176963102/xiaomi-redmi-9a-2-32gb-seryj-100399600-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-seryi-100399600/?c=113220100#!/item',
    type:1,
    like:0
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ зеленый',
    price: 46000,
    description: 'технология NFC: Нет\n' +
      'цвет: зеленый\n' +
      'тип экрана: PLS TFT LCD\n' +
      'диагональ: 6.5 дюйм\n' +
      'размер оперативной памяти: 2 ГБ\n' +
      'процессор: 8-ядерный Unisoc SC9863A\n' +
      'объем встроенной памяти: 32 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h11/52423990575134/samsung-galaxy-a03-core-2-gb-32-gb-zelenyj-105772575-1.jpg',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-zelenyi-105772575/?c=113220100#!/item',
    type:1,
    like:0
  },
  {
    id: 4,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ зеленый',
    price: 39900,
    description: 'технология NFC: Нет\n' +
      'цвет: зеленый\n' +
      'тип экрана: сенсорный, мультитач, IPS\n' +
      'диагональ: 6.53 дюйм\n' +
      'размер оперативной памяти: 2 ГБ\n' +
      'процессор: 8-ядерный MediaTek Helio G25\n' +
      'объем встроенной памяти: 32 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/ha0/50489568362526/xiaomi-redmi-9a-2-32gb-zelenyj-100436948-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-zelenyi-100436948/?c=113220100#!/item',
    type:1
  },
  {
    id: 5,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 170_000,
    description:'диагональ экрана: 15.6 дюйм\n' +
      'процессор: Intel Pentium Gold 7505\n' +
      'видеокарта: Intel UHD Graphics\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 256 ГБ',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    url:'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=113220100#!/item',
    type:2,
    like:0
  },
  {
    id: 6,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 385_000,
    description:'диагональ экрана: 15.6 дюйм\n' +
      'процессор: Intel Core i5 11400H\n' +
      'видеокарта: NVIDIA GeForce GTX 1650\n' +
      'размер оперативной памяти: 16 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 512 ГБ',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    url:'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=113220100#!/item',
    type:2,
    like:0
  },
  {
    id: 7,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239_000,
    description:'диагональ экрана: 15.6 дюйм\n' +
      'процессор: Intel Core i3 1115G4\n' +
      'видеокарта: Intel UHD Graphics\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 512 ГБ',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    url:'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=113220100#!/item',
    type:2,
    like:0
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 139_000,
    description:'диагональ экрана: 13.3 дюйм\n' +
      'процессор: Apple M1\n' +
      'видеокарта: Apple M1 7 core\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 256 ГБ',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=113220100#!/item',
    type:2,
    like:0
  },
  {
    id: 9,
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 500_000,
    description:'диагональ экрана: 14 дюйм\n' +
      'процессор: Intel Celeron N4020\n' +
      'видеокарта: Intel UHD Graphics 600\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 128 ГБ',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=113220100#!/item',
    type:2,
    like:0
  },
  {
    id:10,
    name:'Мышь Logitech G102 Lightsync черный',
    price: 10000,
    description: 'тип подключения: проводная\n' +
      'тип сенсора: оптическая светодиодная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой руки\n' +
      'игровая: Да\n' +
      'разрешение оптического сенсора: 8000 dpi\n' +
      'количество программируемых клавиш: 6',
    url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg',
    type: 3,
    like: 0
  },
  {
    id:11,
    name:'Мышь Xiaomi Mi Dual Mode Wireless Mouse Silent Edition черный',
    price: 7200,
    description: 'тип подключения: беспроводная\n' +
      'тип сенсора: оптическая светодиодная\n' +
      'интерфейс: USB, ,Bluetooth\n' +
      'дизайн: для правой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 1300 dpi',
    url: 'https://kaspi.kz/shop/p/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-chernyi-101193311/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/h16/33805352566814/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-cernyj-101193311-1-Container.jpg',
    type: 3,
    like: 0
  },
  {
    id:12,
    name:'Мышь X-Game XM-775OGB черный',
    price: 1609,
    description: 'тип подключения: беспроводная\n' +
      'тип сенсора: оптическая светодиодная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой и левой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 1000 dpi',
    url: 'https://kaspi.kz/shop/p/x-game-xm-775ogb-chernyi-100374644/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/ha8/32606943117342/x-game-xm-775ogb-cernyj-100374644-1-Container.jpg',
    type: 3,
    like: 0
  },
  {
    id:13,
    name:'Мышь X-Game XM-770OUB черный',
    price: 1400,
    description: 'тип подключения: проводная\n' +
      'тип сенсора: оптическая светодиодная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой и левой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 1000 dpi',
    url: 'https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=113220100#!/item',
    type: 3,
    like: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h11/50458052591646/x-game-xm-770oub-black-9101354-1-Container.jpg'
  },
  {
    id:14,
    name:'Мышь X-Game XM-880OUB черный',
    price: 600,
    description: 'тип подключения: проводная\n' +
      'тип сенсора: оптическая светодиодная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой и левой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 800 dpi',
    url: 'https://kaspi.kz/shop/p/x-game-xm-880oub-chernyi-100084732/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/hb4/32430376648734/x-game-xm-880oub-cernyj-100084732-1-Container.jpg',
    type: 3,
    like: 0
  },
  {
    id:15,
    name:'Клавиатура X-Game XK-200UB черный',
    price: 2700,
    description: 'тип: мембранная\n' +
      'дизайн: классическая\n' +
      'назначение: для настольного компьютера\n' +
      'тип подключения: проводная',
    url: 'https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h75/31943918518302/x-game-xk-200ub-black-9200601-1-Container.jpg',
    type: 4,
    like: 0
  },
  {
    id:16,
    name:'Клавиатура Rii mini i8 черный',
    price: 2300,
    description: 'тип: оптическая\n' +
      'дизайн: мультимедийная\n' +
      'назначение: для настольного компьютера\n' +
      'тип подключения: беспроводная',
    url: 'https://kaspi.kz/shop/p/rii-mini-i8-chernyi-101174843/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h68/47232109346846/rii-mini-i8-cernyj-101174843-1-Container.jpg',
    type: 4,
    like: 0
  },
  {
    id:17,
    name:'Клавиатура Zwerg Grabe черный',
    price: 3600,
    description: 'тип: мембранная\n' +
      'дизайн: классическая\n' +
      'назначение: для настольного компьютера\n' +
      'тип подключения: беспроводная',
    url: 'https://kaspi.kz/shop/p/zwerg-grabe-chernyi-104495155/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h26/50095089090590/zwerg-grabe-cernyj-104495155-1.jpg',
    type: 4,
    like: 0
  },
  {
    id:18,
    name:'Клавиатура Gembird KB-U-103-KZ черный',
    price: 990,
    description: 'тип: мембранная\n' +
      'дизайн: классическая\n' +
      'назначение: для настольного компьютера\n' +
      'тип подключения: проводная',
    url: 'https://kaspi.kz/shop/p/gembird-kb-u-103-kz-chernyi-9200576/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h91/31541212938270/gembird-kb-u-103-kz-black-9200576-1.jpg',
    type: 4,
    like: 0
  },
  {
    id:19,
    name:'Клавиатура AULA Fireshock V5 черный',
    price: 35000,
    description: 'тип: механическая\n' +
      'дизайн: игровая\n' +
      'назначение: для настольного компьютера\n' +
      'тип подключения: проводная',
    url: 'https://kaspi.kz/shop/p/aula-fireshock-v5-chernyi-106256688/?c=113220100#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/hc0/62103647715358/aula-fireshock-v5-cernyj-106256688-1.jpg',
    type: 4,
    like: 0
  }
];

