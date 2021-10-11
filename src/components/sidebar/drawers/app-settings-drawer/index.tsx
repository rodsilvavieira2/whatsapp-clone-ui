import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { CustomDrawer } from '../shared'
import { DefaultDrawersProps } from '../shared/default'
import { InitialContent } from './initial-content'
import { RenderSecondaryContent } from './render-secondary-content'

export type SecondaryContent =
  | 'notifications'
  | 'chatWallpaper'
  | 'archived'
  | 'block'
  | 'help'

export const AppSettingsDrawer = ({
  isOpen,
  onRequestCloseDrawer
}: DefaultDrawersProps): JSX.Element => {
  const [shouldShowSecondaryContent, setShouldShowSecondaryContent] =
    useState(false)

  const [currentSecondaryContent, setCurrentSecondaryContent] =
    useState<SecondaryContent>('notifications')

  const onRequestShowSecondaryContent = (content: SecondaryContent) => {
    setCurrentSecondaryContent(content)

    setShouldShowSecondaryContent(true)
  }

  return (
    <CustomDrawer open={isOpen} variant="persistent" anchor="left">
      <AnimatePresence initial={false}>
        {shouldShowSecondaryContent
          ? (
          <RenderSecondaryContent
            key={2}
            currentContent={currentSecondaryContent}
            onRequestBack={() => setShouldShowSecondaryContent(false)}
          />
            )
          : (
          <InitialContent
            key={1}
            onRequestShowSecondaryContent={onRequestShowSecondaryContent}
            onRequestCloseDrawer={onRequestCloseDrawer}
          />
            )}
      </AnimatePresence>
    </CustomDrawer>
  )
}
