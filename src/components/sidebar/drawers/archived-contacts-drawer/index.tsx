import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { CustomDrawer } from '../shared'
import { DefaultDrawersProps } from '../shared/default'
import { ArchivedConfig } from './archived-config'
import { ArchivedList } from './archived-list'

export const ArchivedContactsDrawer = ({
  isOpen,
  onRequestCloseDrawer
}: DefaultDrawersProps): JSX.Element => {
  const [isArchivedListShowing, setIsArchivedListShowing] = useState(true)

  return (
    <CustomDrawer variant="persistent" anchor="left" open={isOpen}>
      <AnimatePresence initial={false}>
        {isArchivedListShowing
          ? (
          <ArchivedList
            key={1}
            onRequestShowArchivedConfig={() => setIsArchivedListShowing(false)}
            onRequestCloseDrawer={onRequestCloseDrawer}
          />
            )
          : (
          <ArchivedConfig
            key={2}
            onRequestShowArchivedList={() => setIsArchivedListShowing(true)}
          />
            )}
      </AnimatePresence>
    </CustomDrawer>
  )
}
