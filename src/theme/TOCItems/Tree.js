import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import React from 'react'
import Tree from '@theme-original/TOCItems/Tree'

import styles from './styles.module.scss'

export default function TreeWrapper(props) {
  const { t } = useTranslation('theme/TOCItems')

  return (
    <>
      <span className={clsx(styles['subtitle'], 'type-label-eyebrow')}>{t('on-this-page')}</span>
      <Tree {...props} />
    </>
  )
}
