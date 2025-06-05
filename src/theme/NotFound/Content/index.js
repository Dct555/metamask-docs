import { useTranslation } from 'react-i18next'
import React from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'
import styles from './styles.module.scss'

export default function NotFoundContent({ className }) {
  const { t } = useTranslation('theme/NotFound/Content')

  return (
    <main className={clsx('container margin-vert--xl', className, styles.notFound)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className={clsx(styles.title, 'type-heading-m')}>
            <Translate id="theme.NotFound.title" description={t('title-404-page')}>
              {t('page-not-found')}
            </Translate>
          </Heading>
          <p className={clsx(styles.description, 'type-paragraph-l')}>
            <Translate id="theme.NotFound.p1" description={t('first-paragraph-404')}>
              {t('not-found-message')}
            </Translate>
          </p>
          <p className={clsx(styles.description, 'type-paragraph-l')}>
            <Translate id="theme.NotFound.p2" description={t('second-paragraph-404')}>
              {t('contact-site-owner')}
            </Translate>
          </p>
        </div>
      </div>
    </main>
  )
}
