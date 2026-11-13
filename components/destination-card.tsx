import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Destination } from '@/lib/destinations'

type DestinationCardProps = {
  destination: Destination
  compact?: boolean
}

export function DestinationCard({ destination, compact = false }: DestinationCardProps) {
  return (
    <article className={`destination-card${compact ? ' destination-card-compact' : ''}`} id={destination.slug}>
      <Link
        className="destination-photo"
        href={`mailto:hola@mareahoteles.com?subject=${encodeURIComponent(`Consulta sobre ${destination.hotel}`)}`}
        aria-label={`Consultar disponibilidad en ${destination.hotel}, ${destination.name}`}
      >
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          sizes={compact ? '(max-width: 700px) 90vw, 32vw' : '(max-width: 700px) 90vw, 50vw'}
          className="destination-image"
        />
        <span className="destination-number">{destination.number}</span>
        <span className="destination-photo-action" aria-hidden="true"><ArrowUpRight size={18} /></span>
        {compact && (
          <span className="destination-overlay-copy">
            <span className="destination-region">{destination.region}</span>
            <span className="destination-name">{destination.name}</span>
            <span className="destination-hotel">{destination.hotel}</span>
          </span>
        )}
      </Link>

      {!compact && (
        <div className="destination-card-body">
          <div className="destination-card-heading">
            <div>
              <span className="destination-category">{destination.category} · {destination.region}</span>
              <h2>{destination.name}</h2>
            </div>
            <span className="hotel-count">01 <span>hotel</span></span>
          </div>
          <p>{destination.description}</p>
          <div className="destination-card-footer">
            <span className="hotel-name">{destination.hotel}</span>
            <Link
              className="text-link"
              href={`mailto:hola@mareahoteles.com?subject=${encodeURIComponent(`Consulta sobre ${destination.hotel}`)}`}
              aria-label={`Consultar estancia en ${destination.hotel}`}
            >
              Consultar estancia <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      )}
    </article>
  )
}
