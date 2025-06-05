import { useTranslation } from 'react-i18next'
import React from 'react'
import Card, { type CardItem } from '@site/src/components/Card'
import Heading from '@theme/Heading'

const CardList: CardItem[] = [
  {
    title: '🏁 Snaps quickstart',
    href: '/snaps/get-started/quickstart',
    description: (
      <>
        Get started quickly by creating and customizing a simple Snap, using the Snaps template
        built with React and TypeScript.
      </>
    ),
  },
  {
    title: '⚙️ Snaps tutorials',
    href: '/snaps/learn/tutorials',
    description: (
      <>
        Follow the step-by-step tutorials to create Snaps that estimate gas fees, provide
        transaction insights with custom UI, and more.
      </>
    ),
  },
  {
    title: '🌐 Snaps API',
    href: '/snaps/reference/snaps-api',
    description: (
      <>
        Use the Snaps API to modify the functionality of MetaMask and communicate between dapps and
        Snaps.
      </>
    ),
  },
]

export default function SnapsSection(): JSX.Element {
  const { t } = useTranslation('components')

  return (
    <section className="container margin-top--lg margin-bottom--lg">
      <Heading as="h1">{t('extend-functionality-of-metamask')}</Heading>
      <p>{t('snap-description-and-functionality')}</p>
      <div className="row">
        {CardList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
