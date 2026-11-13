'use client'

import { useState } from 'react'
import { DestinationCard } from '@/components/destination-card'
import { destinationCategories, destinations, type DestinationCategory } from '@/lib/destinations'

type FilterCategory = 'Todos' | DestinationCategory

export function DestinationExplorer() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('Todos')
  const visibleDestinations = activeCategory === 'Todos'
    ? destinations
    : destinations.filter((destination) => destination.category === activeCategory)

  return (
    <>
      <section className="destination-page-intro" aria-labelledby="destination-page-title">
        <div>
          <span className="eyebrow">PEQUEÑOS HOTELES, GRANDES LUGARES</span>
          <h1 id="destination-page-title">Encuentra tu <em>horizonte.</em></h1>
        </div>
        <p>Cuatro destinos elegidos para bajar el ritmo, mirar alrededor y vivir cada viaje como si fuera solo tuyo.</p>
      </section>

      <section className="destination-listing" aria-label="Explora destinos y hoteles">
        <div className="destination-toolbar">
          <div className="filter-list" role="group" aria-label="Filtrar destinos por tipo">
            {destinationCategories.map((category) => (
              <button
                className={`filter-button${activeCategory === category ? ' is-active' : ''}`}
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="destination-result-count" aria-live="polite">
            {String(visibleDestinations.length).padStart(2, '0')} LUGARES
          </span>
        </div>

        <div className="destination-grid" aria-live="polite">
          {visibleDestinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="destination-note" aria-label="Nuestra forma de viajar">
        <span className="note-symbol" aria-hidden="true">✳</span>
        <p>Un buen viaje no se mide en kilómetros. Se mide en <em>lo que te llevas de vuelta.</em></p>
      </section>
    </>
  )
}
