import type { Metadata } from 'next'
import { DestinationExplorer } from '@/components/destination-explorer'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Destinos y hoteles | Marea Hoteles',
  description: 'Explora los hoteles con alma de Marea en la costa Amalfitana, las islas Cícladas, Marrakech y los Dolomitas.',
}

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="destinations-page section-wrap">
        <DestinationExplorer />
      </main>
      <SiteFooter />
    </>
  )
}
