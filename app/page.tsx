import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { DestinationCard } from '@/components/destination-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { destinations } from '@/lib/destinations'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-image-wrap">
            <Image
              src="/images/amalfi.png"
              alt="Vista de la costa Amalfitana desde la terraza de un hotel junto al mar"
              fill
              priority
              sizes="100vw"
              className="hero-image"
            />
            <div className="hero-shade" />
            <div className="hero-content">
              <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> UNA COLECCIÓN PARA SENTIR EL VIAJE</span>
              <h1 id="hero-title">El mundo,<br />a tu <em>propio ritmo.</em></h1>
              <p>Hoteles singulares, lugares inolvidables y tiempo para vivirlos de verdad.</p>
              <Link className="button button-light" href="/destinos">
                Explorar destinos <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className="hero-bottom-note">
              <span>40°37&apos; N&nbsp; 14°36&apos; E</span>
              <span>Costa Amalfitana · Italia</span>
              <Link href="#lugares" aria-label="Desliza para descubrir destinos"><ArrowDown aria-hidden="true" size={17} /></Link>
            </div>
            <div className="hero-stamp" aria-label="Cuatro destinos, cuatro formas de viajar">
              <span>4</span><span>destinos<br />con alma</span>
            </div>
          </div>
        </section>

        <section className="intro-section" id="filosofia">
          <span className="eyebrow">NO ES SOLO DÓNDE TE ALOJAS</span>
          <p>Es cómo te hace sentir el lugar. <em>Y todo lo que sucede mientras estás allí.</em></p>
          <span className="intro-mark" aria-hidden="true">✳</span>
        </section>

        <section className="places-section section-wrap" id="lugares" aria-labelledby="places-title">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CUATRO LUGARES, INFINITAS HISTORIAS</span>
              <h2 id="places-title">Elige tu <em>horizonte.</em></h2>
            </div>
            <Link className="text-link section-link" href="/destinos">
              Ver todos los destinos <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="home-destinations-grid">
            {destinations.slice(0, 3).map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} compact />
            ))}
          </div>
          <div className="places-footnote"><span>01 — 03</span><span>Desliza con la imaginación. Nosotros nos ocupamos del resto.</span></div>
        </section>

        <section className="stay-section section-wrap" aria-labelledby="stay-title">
          <div className="stay-image-wrap">
            <Image
              src="/images/marrakech.png"
              alt="Patio tranquilo de un riad de Marea en Marrakech"
              fill
              sizes="(max-width: 800px) 100vw, 52vw"
              className="stay-image"
            />
            <span className="image-caption">RIAD NÉROLI · MARRAKECH</span>
          </div>
          <div className="stay-copy">
            <span className="eyebrow">LA HOSPITALIDAD, SIN PRISA</span>
            <h2 id="stay-title">Un lugar que se siente <em>tuyo.</em></h2>
            <p>Casas pequeñas, historias locales y una bienvenida que no necesita guion. Cada hotel Marea nace de su entorno y te invita a descubrirlo desde dentro.</p>
            <Link className="text-link" href="/destinos">
              Conoce nuestros hoteles <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <div className="stay-signature"><span className="signature-rule" /><span>Viajar bien es sentirse en casa, en otra parte.</span></div>
          </div>
        </section>

        <section className="closing-banner section-wrap">
          <span className="eyebrow">TU SIGUIENTE HISTORIA TE ESPERA</span>
          <h2>Hay un lugar <em>para ti.</em></h2>
          <Link className="button button-dark" href="/destinos">
            Descubre Marea <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
