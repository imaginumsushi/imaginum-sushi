import Link from 'next/link'

// Campanha Menu Degustação R$ 179,90 — seg a qua, exceto feriados, somente com reserva online.
// Para encerrar a campanha: remova os blocos <PromoHero/>, <PromoSecao/> e o <PromoBarMobile/> do layout.
export const PROMO_PRECO = 'R$ 179,90'

type BotaoProps = { texto: string; origem: string; className?: string }

/** Botão padrão da campanha: selo "Oferta Exclusiva" + texto da chamada. `origem` identifica o botão na planilha (coluna Página de entrada). */
export function PromoBotao({ texto, origem, className = '' }: BotaoProps) {
  return (
    <Link href={`/reserva?cta=${origem}`} className={`promo-btn ${className}`.trim()}>
      <span className="promo-btn-selo">Oferta Exclusiva</span>
      <span className="promo-btn-texto">{texto}</span>
    </Link>
  )
}

/** 1. Primeira dobra da página inicial (dentro do banner principal). */
export function PromoHero() {
  return (
    <div className="promo-hero">
      <p className="promo-hero-titulo">De segunda a quarta, o seu próximo jantar japonês custa menos.</p>
      <p className="promo-hero-preco">
        Menu Degustação por <strong>{PROMO_PRECO}</strong> por pessoa
      </p>
      <PromoBotao texto="Reserve seu Menu Degustação" origem="home_topo" />
      <p className="promo-regras">Segunda a quarta · exceto feriados · somente com reserva online</p>
    </div>
  )
}

/** 2 e 4. Bloco dentro da seção Menu Degustação (página inicial e cardápio). */
export function PromoSecao({ texto, origem }: { texto: string; origem: string }) {
  return (
    <div className="promo-secao">
      <div className="promo-secao-info">
        <p className="promo-secao-eyebrow">Segunda a quarta · com reserva</p>
        <p className="promo-secao-preco">
          Menu Degustação por <strong>{PROMO_PRECO}</strong> <span>por pessoa</span>
        </p>
        <p className="promo-regras">Exceto feriados. Válido somente com reserva online.</p>
      </div>
      <PromoBotao texto={texto} origem={origem} />
    </div>
  )
}
