import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="footer-brand" href="/">marea</Link>
          <p>Una colección de lugares para<br />sentirse en otro sitio.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Explora</span>
            <Link href="/destinos">Destinos y hoteles</Link>
            <Link href="/#filosofia">Nuestra esencia</Link>
          </div>
          <div>
            <span className="footer-label">Hablemos</span>
            <a href="mailto:hola@mareahoteles.com">hola@mareahoteles.com</a>
            <a href="tel:+34910000000">+34 910 000 000</a>
          </div>
        </div>
        <Link className="footer-contact" href="/destinos">
          Tu próximo viaje empieza aquí <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Marea Hoteles</span>
        <span>Hecho para viajar sin prisa.</span>
        <a href="mailto:hola@mareahoteles.com?subject=Privacidad">Privacidad</a>
      </div>
    </footer>
  )
}
