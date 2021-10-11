import { SecondaryContent } from './index'
import { ArchivedConfigContent, BlockContent, NotificationsContent } from './sections'

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
    archived: <ArchivedConfigContent onRequestBack={onRequestBack} />,
    block: <BlockContent onRequestBack={onRequestBack}/>,
    help: <div></div>
  }

  return choose[currentContent]
}
