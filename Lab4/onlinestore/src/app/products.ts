export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  url: string;

  img_url: string;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 90175,
    description: 'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
      'диагональ: 6.6 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Exynos 850\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg'},
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 71988,
    description: 'технология NFC: Нет\n' +
      'цвет: серый\n' +
      'тип экрана: IPS, сенсорный, мультитач\n' +
      'диагональ: 6.71 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg'

  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi 10A 3 ГБ/64 ГБ серый графит',
    price: 59837,
    description: 'технология NFC: Нет\n' +
      'цвет: серый\n' +
      'тип экрана: IPS\n' +
      'диагональ: 6.53 дюйм\n' +
      'размер оперативной памяти: 3 ГБ\n' +
      'процессор: MediaTek Helio G25\n' +
      'объем встроенной памяти: 64 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h81/52289124499486/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712-1.jpg'
  },
  {
    id: 4,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ голубой',
    price: 71700,
    description: 'технология NFC: Нет\n' +
      'цвет: голубой\n' +
      'тип экрана: IPS, сенсорный, мультитач\n' +
      'диагональ: 6.71 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-goluboi-104417308/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h27/49939926581278/xiaomi-redmi-10c-4-gb-128-gb-goluboj-104417308-1.jpg'
  },
  {
    id: 5,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ зеленый',
    price: 72700,
    description: 'технология NFC: Да\n' +
      'цвет: зеленый\n' +
      'тип экрана: IPS, сенсорный, мультитач\n' +
      'диагональ: 6.71 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg'
  },
  {
    id: 6,
    name: 'Hansa FS1004.3W 100 л белый',
    price: 89700,
    description: 'тип: морозильник-ларь\n' +
      'размораживание морозильной камеры: ручное\n' +
      'мощность замораживания: 45 кг/сут\n' +
      'класс энергопотребления: A+\n' +
      'цвет: белый',
    url:'https://kaspi.kz/shop/p/hansa-fs1004-3w-100-l-belyi-103863751/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/hc3/48944781983774/hansa-fs1004-3w-belyj-103863751-1.jpg'
  },
  {
    id: 7,
    name: 'Морозильник DAUSCHER DCF-160Q 160 л белый',
    price: 97700,
    description: 'тип: морозильник-ларь\n' +
      'общий объем: 160 л\n' +
      'размораживание морозильной камеры: ручное\n' +
      'мощность замораживания: 8 кг/сут\n' +
      'климатический класс: ST\n' +
      'класс энергопотребления: A\n' +
      'цвет: белый',
    url:'https://kaspi.kz/shop/p/dauscher-dcf-160q-160-l-belyi-2800476/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hdc/49698101690398/dauscher-dcf-160q-160-l-belyi-2800476-1.jpg'
  },
  {
    id: 8,
    name: 'Морозильник DEXP C2-0100AMG 99 л белый',
    price: 69700,
    description: 'тип: морозильник-ларь\n' +
      'общий объем: 99 л\n' +
      'размораживание морозильной камеры: ручное\n' +
      'климатический класс: N, ,SN, ,T, ,ST\n' +
      'класс энергопотребления: A+\n' +
      'цвет: белый',
    url:'https://kaspi.kz/shop/p/dexp-c2-0100amg-99-l-belyi-108194554/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/hc3/67237315313694/dexp-c2-0100amg-99-l-belyi-108194554-1.jpg'
  },
  {
    id: 9,
    name: 'Морозильник Бирюса 355KX 330 л белый',
    price: 162700,
    description: 'тип: морозильник-ларь\n' +
      'общий объем: 330 л\n' +
      'размораживание морозильной камеры: ручное\n' +
      'мощность замораживания: 20 кг/сут\n' +
      'климатический класс: N\n' +
      'класс энергопотребления: A\n' +
      'цвет: белый',
    url:'https://kaspi.kz/shop/p/birjusa-355kx-330-l-belyi-2800688/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h6c/49694104715294/birusa-355kx-belyj-2800688-1-Container.jpg'
  },
  {
    id: 10,
    name: 'Морозильник Бирюса 240KX 220 л белый',
    price: 124700,
    description: 'тип: морозильник-ларь\n' +
      'размораживание морозильной камеры: ручное\n' +
      'мощность замораживания: 14 кг/сут\n' +
      'климатический класс: N\n' +
      'класс энергопотребления: A\n' +
      'цвет: белый',
    url:'https://kaspi.kz/shop/p/birjusa-240kx-220-l-belyi-2800628/?c=113220100#!/item',
    img_url:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/he8/49180981592094/birusa-240kx-white-2800628-1-Container.jpg'
  }

];
