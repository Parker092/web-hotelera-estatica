export type DestinationCategory = 'Costa' | 'Isla' | 'Desierto' | 'Montaña'

export type Destination = {
  slug: string
  name: string
  region: string
  category: DestinationCategory
  hotel: string
  description: string
  image: string
  imageAlt: string
  number: string
}

export const destinations: Destination[] = [
  {
    slug: 'costa-amalfitana',
    name: 'Costa Amalfitana',
    region: 'Campania, Italia',
    category: 'Costa',
    hotel: 'Casa Nerina',
    description: 'Días largos junto al mar, pueblos suspendidos y sobremesas que no miran el reloj.',
    image: '/images/amalfi.png',
    imageAlt: 'Terraza de hotel sobre los tejados y el mar azul de la costa Amalfitana',
    number: '01',
  },
  {
    slug: 'islas-cicladas',
    name: 'Islas Cícladas',
    region: 'Egeo, Grecia',
    category: 'Isla',
    hotel: 'Eolia House',
    description: 'Calas de agua transparente, arquitectura blanca y la calma luminosa del Egeo.',
    image: '/images/cyclades.png',
    imageAlt: 'Hotel blanco en una colina sobre una cala de agua azul en las islas Cícladas',
    number: '02',
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    region: 'Marrakech-Safí, Marruecos',
    category: 'Desierto',
    hotel: 'Riad Néroli',
    description: 'Un refugio entre patios de azulejos, jardines de naranjos y calles llenas de vida.',
    image: '/images/marrakech.png',
    imageAlt: 'Patio de un riad en Marrakech con naranjos y una piscina de azulejos turquesa',
    number: '03',
  },
  {
    slug: 'dolomitas',
    name: 'Dolomitas',
    region: 'Tirol del Sur, Italia',
    category: 'Montaña',
    hotel: 'Casa Alpina Lume',
    description: 'Bosques, aire fresco y una casa de montaña para volver a escuchar el silencio.',
    image: '/images/dolomitas.png',
    imageAlt: 'Refugio alpino de madera ante las montañas Dolomitas y un prado verde',
    number: '04',
  },
]

export const destinationCategories = ['Todos', 'Costa', 'Isla', 'Desierto', 'Montaña'] as const
