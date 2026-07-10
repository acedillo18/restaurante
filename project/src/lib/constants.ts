export const WHATSAPP_URL = 'https://wa.link/c3lp02';

export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Av.+%C3%81lvaro+Obreg%C3%B3n+160,+Colonia+Roma+Norte,+Cuauht%C3%A9moc,+06700+Ciudad+de+M%C3%A9xico&t=&z=16&ie=UTF8&iwloc=&output=embed';

export const MAPS_LINK_URL = 'https://maps.app.goo.gl/XumT9ULMV7yZUMBH6';

const px = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  heroDish: px(37322905, 1200),
  heroBg: px(34723813, 1600),
  restaurantInterior: px(34723813, 1200),
  chefPortrait: px(6428970, 1000),
  chefPlating: px(29692600, 800),
  ambianceBar: px(14663641, 1000),
  ambianceTable: px(33013713, 1000),
  dishes: {
    steak: px(13322845, 800),
    steakWine: px(32738701, 800),
    ceviche: px(31495668, 800),
    cevicheGarnish: px(28490820, 800),
    tartare: px(24038044, 800),
    tartareQuail: px(29692600, 800),
    pasta: px(7491885, 800),
    ravioli: px(33474122, 800),
    dessertChocolate: px(29978698, 800),
    dessertBerries: px(36183203, 800),
    dessertGarnish: px(36183203, 800),
    cocktail: px(14663641, 800),
    cocktails: px(33013713, 800),
  },
  gallery: [
    px(13322845, 600),
    px(31495668, 600),
    px(7491885, 600),
    px(29978698, 600),
    px(24038044, 600),
    px(32738701, 600),
    px(33474122, 600),
    px(36183203, 600),
    px(34723813, 600),
    px(14663641, 600),
    px(6428970, 600),
    px(28490820, 600),
  ],
};

export const RESTAURANT = {
  name: 'Don Arcángel',
  tagline: 'Cocina de Autor',
  cuisine: 'Cocina mexicana contemporánea con técnica francesa',
  phoneDisplay: '+52 55 8423 3064',
  email: 'reservaciones@donarcangel.mx',
  addressLine: 'Av. Álvaro Obregón 160, Colonia Roma Norte',
  addressLine2: 'Cuauhtémoc, 06700 Ciudad de México, CDMX',
  neighborhood: 'Roma Norte, CDMX',
  hours: [
    { day: 'Lunes', time: 'Cerrado' },
    { day: 'Martes - Jueves', time: '1:00 PM – 11:00 PM' },
    { day: 'Viernes - Sábado', time: '1:00 PM – 1:00 AM' },
    { day: 'Domingo', time: '1:00 PM – 6:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
  },
};

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    category: 'Entradas',
    items: [
      {
        name: 'Ceviche de Atún Azul',
        description: 'Atún fresco marinado en limón persa, leche de tigre de mezcal, aguacate y chile costeño. Servido con totopos de maíz azul.',
        price: '$220',
        image: IMAGES.dishes.ceviche,
        tag: 'Del chef',
      },
      {
        name: 'Tartar de Res con Huevo de Codorniz',
        description: 'Filete tierno picado a mano, yema de codorniz, alcaparras, mostaza Dijon y crujientes de pan de masa madre.',
        price: '$190',
        image: IMAGES.dishes.tartare,
      },
      {
        name: 'Garnachas de la Casa',
        description: 'Tres garnachas crujientes: cochinita pibil, tinga de res y hongos con epazote. Adornadas con cebolla encurtida y salsa de árbol.',
        price: '$160',
      },
    ],
  },
  {
    category: 'Principales',
    items: [
      {
        name: 'Filete Wagyu con Salsa de Hongos',
        description: 'Filete Wagyu A5 a la parrilla con salsa cremosa de hongos porcini, puré de papa trufado y espárragos asados.',
        price: '$520',
        image: IMAGES.dishes.steakWine,
        tag: 'Estrella de la casa',
      },
      {
        name: 'Ravioli de Hongos Silvestres',
        description: 'Ravioli relleno de hongos silvestres y ricotta, en salsa cremosa de trufa negra con parmesano envejecido y crujiente de setas.',
        price: '$280',
        image: IMAGES.dishes.ravioli,
      },
      {
        name: 'Pulpo a las Brasas',
        description: 'Pulpo gallego a las brasas con puré de papa ahumada, pimentón de la Vera, aceite de oliva y chile morita.',
        price: '$390',
      },
      {
        name: 'Pescado del Día en Hoja Santa',
        description: 'Pescado de pesca sostenible envuelto en hoja santa, cocido al vapor con mojo de ajo, servido con vegetales de temporada.',
        price: '$340',
      },
    ],
  },
  {
    category: 'Postres',
    items: [
      {
        name: 'Volcán de Chocolate Abuelita',
        description: 'Pastel de chocolate mexicano con centro líquido, helado de vainilla bourbon y frutos rojos frescos.',
        price: '$140',
        image: IMAGES.dishes.dessertChocolate,
        tag: 'Favorito',
      },
      {
        name: 'Crepas de Cajeta',
        description: 'Crepas artesanales rellenas de cajeta de leche de cabra, flambeadas al momento con plátano y nuez tostada.',
        price: '$120',
        image: IMAGES.dishes.dessertBerries,
      },
      {
        name: 'Tres Leches de Mezcal',
        description: 'Bizcocho bañado en tres leches infusionadas con mezcal espadín, merengue tostado y reducción de frutos rojos.',
        price: '$130',
      },
    ],
  },
  {
    category: 'Bar & Coctelería',
    items: [
      {
        name: 'Mezcal Negroni',
        description: 'Mezcal espadín, Campari, vermut dulce y un toque de chipotle. Servido en copa de cristal con hielo grande.',
        price: '$180',
        image: IMAGES.dishes.cocktail,
        tag: 'Del bar',
      },
      {
        name: 'Margarita de Tamarindo',
        description: 'Tequila reposado, tamarindo natural, jugo de limón y sal de gusano. Con escarchado de chile piquín.',
        price: '$160',
      },
      {
        name: 'Clarillo de Guayaba',
        description: 'Ginebra botánica, clarificado de guayaba y hierbabuena, limón persa y soda. Refrescante y floral.',
        price: '$170',
        image: IMAGES.dishes.cocktails,
      },
    ],
  },
];
