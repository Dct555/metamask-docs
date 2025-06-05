import { useTranslation } from 'react-i18next'
import React from 'react'
import clsx from 'clsx'
import styles from '@site/src/components/ParserOpenRPC/InteractiveBox/styles.module.scss'

export const AddButton = props => {
  const { t } = useTranslation('components/ParserOpenRPC/InteractiveBox/buttonTemplates')

  return (
    <button className={clsx(styles.tableButton, styles.tableButtonAddNewArray)} {...props}>
      <img src="/img/icons/plus-icon.svg" alt={t('add-action')} width="16px" height="16px" />
      <span className={styles.tableButtonAddArrayItemName}>{t('add-button')}</span>
    </button>
  )
}
