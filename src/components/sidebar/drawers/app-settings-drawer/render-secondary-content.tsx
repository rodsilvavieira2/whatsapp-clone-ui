import { ArchivedConfig } from './archived-config'
import { SecondaryContent } from './index'
import { NotificationsContent } from './notifications-content'

type RenderSecondaryContentProps = {
  currentContent: SecondaryContent
  onRequestBack: () => void
}

export const RenderSecondaryContent = ({
  onRequestBack,
  currentContent
}: RenderSecondaryContentProps): JSX.Element => {
  const choose = {
    notifications: <NotificationsContent onRequestBack={onRequestBack} />,
    chatWallpaper: <div></div>,
    archived: <ArchivedConfig onRequestBack={onRequestBack} />,
    block: <div></div>,
    help: <div></div>
  }

  return choose[currentContent]
}
