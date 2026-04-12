import wallpaper from '../../assets/wallpaper.mp4'
import { DesktopWrapper, VideoBackground } from './Desktop.styles'
import DesktopIcon from './DesktopIcon'
import { desktopIcons, type DesktopIconConfig } from '../../config/desktopIcons.config'

interface Props {
  onPortfolioOpen: (tab?: string) => void
}

const Desktop = ({ onPortfolioOpen }: Props) => {
  const handleIconDoubleClick = (icon: DesktopIconConfig) => {
  if (icon.action === 'link') {
    window.open(icon.target, '_blank')
  } else if (icon.action === 'window' && icon.target === 'portfolio') {
    onPortfolioOpen('Projects')
  }
}

  return (
    <DesktopWrapper>
      <VideoBackground src={wallpaper} autoPlay loop muted />
      {desktopIcons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          icon={icon}
          onDoubleClick={handleIconDoubleClick}
        />
      ))}
    </DesktopWrapper>
  )
}

export default Desktop