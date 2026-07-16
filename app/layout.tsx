import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Imaginum Sushi | Restaurante Japonês em Curitiba — Vila Izabel',
    template: '%s | Imaginum Sushi Curitiba',
  },
  description:
    'Imaginum Sushi: culinária japonesa em Curitiba, Vila Izabel. Combinados frescos, temakis artesanais, hot rolls e delivery. Rua Tabajaras, 714. Reservas: (41) 3082-3093.',
  keywords: ['sushi curitiba', 'restaurante japonês curitiba', 'temaki curitiba', 'combinado sushi', 'japanese fusion curitiba', 'delivery sushi curitiba', 'imaginum sushi'],
  authors: [{ name: 'Imaginum Sushi' }],
  creator: 'Imaginum Sushi',
  metadataBase: new URL('https://www.imaginumsushi.com.br'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.imaginumsushi.com.br',
    siteName: 'Imaginum Sushi',
    title: 'Imaginum Sushi | Restaurante Japonês em Curitiba',
    description: 'Culinária japonesa em Curitiba, Vila Izabel. Combinados frescos, temakis artesanais e delivery. Rua Tabajaras, 714 — (41) 3082-3093.',
    images: [{ url: '/og-cover.jpg', width: 1200, height: 630, alt: 'Imaginum Sushi — Japanese Fusion Food em Curitiba' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imaginum Sushi | Restaurante Japonês em Curitiba',
    description: 'Culinária japonesa em Curitiba, Vila Izabel. Combinados, temakis e delivery. (41) 3082-3093.',
    images: ['/og-cover.jpg'],
  },
}

const schemaRestaurant = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://www.imaginumsushi.com.br/#restaurant',
  name: 'Imaginum Sushi',
  alternateName: 'Imaginum Japanese Fusion Food',
  description: 'Restaurante de culinária japonesa em Curitiba especializado em combinados frescos, temakis artesanais, hot rolls e sashimis. App próprio e delivery.',
  url: 'https://www.imaginumsushi.com.br',
  telephone: '+55-41-3082-3093',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Tabajaras, 714',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    postalCode: '80035-270',
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -25.424, longitude: -49.266 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '11:30', closes: '23:30' },
  ],
  servesCuisine: ['Japonesa', 'Sushi', 'Temaki', 'Japanese Fusion'],
  priceRange: '$$',
  paymentAccepted: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Pix'],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Delivery', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Delivery online', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Reservas', value: true },
  ],
  sameAs: [
    'https://www.instagram.com/imaginumsushi',
    'https://www.facebook.com/imaginumsushi',
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O Imaginum Sushi fica em qual endereço em Curitiba?', acceptedAnswer: { '@type': 'Answer', text: 'O Imaginum Sushi fica na Rua Tabajaras, 714, Vila Izabel, Curitiba/PR.' } },
    { '@type': 'Question', name: 'Qual o telefone do Imaginum Sushi?', acceptedAnswer: { '@type': 'Answer', text: 'O telefone do Imaginum Sushi é (41) 3082-3093. Atendemos também pelo WhatsApp.' } },
    { '@type': 'Question', name: 'Qual o horário de funcionamento do Imaginum Sushi?', acceptedAnswer: { '@type': 'Answer', text: 'Seg–Sáb: 11h30–23h30. Domingo: Fechado.' } },
    { '@type': 'Question', name: 'O Imaginum Sushi faz delivery em Curitiba?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! Faça seu pedido em imaginumsushi.menudino.com ou pelo iFood. Entregamos em Curitiba e região.' } },
    { '@type': 'Question', name: 'O Imaginum Sushi aceita reservas?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, aceitamos reservas pelo (41) 3082-3093 e pelo WhatsApp. Recomendamos reservar com antecedência nos fins de semana.' } },
    { '@type': 'Question', name: 'Quais formas de pagamento o Imaginum Sushi aceita?', acceptedAnswer: { '@type': 'Answer', text: 'Aceitamos dinheiro, Pix, cartão de crédito e débito de todas as bandeiras.' } },
    { '@type': 'Question', name: 'Tem opções vegetarianas no Imaginum Sushi?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! Temos temakis e uramakis vegetarianos com pepino, abacate, legumes e muito mais. Consulte nosso cardápio completo para ver todas as opções.' } },
    { '@type': 'Question', name: 'Que tipo de culinária o Imaginum Sushi serve?', acceptedAnswer: { '@type': 'Answer', text: 'Japanese Fusion Food: combinados de sushi, temakis artesanais, hot rolls crocantes, sashimis frescos e entradas japonesas como edamame, missoshiru e guioza.' } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba" />
        <meta name="geo.position" content="-25.424000;-49.266000" />
        <Script id="schema-restaurant" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaRestaurant) }} />
        <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
