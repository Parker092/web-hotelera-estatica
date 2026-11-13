import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Marea Hoteles, inicio">
        <span className="brand-name">marea</span>
        <span className="brand-caption">HOTELES CON ALMA</span>
      </Link>

      <nav className="primary-nav" aria-label="Navegación principal">
        <Link href="/">Inicio</Link>
        <Link href="/destinos">Destinos y hoteles</Link>
        <Link href="/#filosofia">Nuestra esencia</Link>
      </nav>

      <Link className="header-cta" href="/destinos">
        Encuentra tu lugar <ArrowUpRight aria-hidden="true" size={15} />
      </Link>
    </header>
  )
}
