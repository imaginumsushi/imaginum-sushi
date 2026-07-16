import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre — Japanese Fusion Food em Curitiba',
  description: 'Conheça a história do Imaginum Sushi, restaurante japonês em Curitiba com app próprio, ingredientes frescos e ambiente sofisticado na Vila Izabel.',
  alternates: { canonical: '/sobre' },
}

export default function Sobre() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
        <section className="section">
          <div className="container" style={{ maxWidth: 760 }}>
            <p className="tag-pill">Nossa história</p>
            <h1>Imaginum Sushi: <em className="gold">paixão</em> pela culinária japonesa</h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem' }}>O Imaginum Sushi nasceu da paixão pela culinária japonesa e do desejo de trazer uma experiência gastronômica completa para Curitiba. Localizado na Rua Tabajaras, 714, no bairro Vila Izabel, somos referência em Japanese Fusion Food na cidade.</p>
            <p style={{ marginTop: '1rem' }}>Nosso compromisso é com o frescor: ingredientes selecionados e entregues diariamente garantem que cada peça de sushi, cada temaki e cada hot roll tenha o sabor autêntico que nossos clientes esperam.</p>
            <p style={{ marginTop: '1rem' }}>Além do salão aconchegante e sofisticado, investimos em tecnologia para facilitar o acesso à nossa culinária: temos app próprio disponível na App Store e Google Play, e também estamos no iFood para atender quem prefere o conforto de casa.</p>
            <p style={{ marginTop: '1rem' }}>Recebemos clientes para almoço e jantar de segunda a sábado. Fazemos reservas pelo telefone (41) 3082-3093 e atendemos grupos e eventos sob consulta.</p>
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/cardapio" className="btn btn-gold">Ver cardápio completo</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
