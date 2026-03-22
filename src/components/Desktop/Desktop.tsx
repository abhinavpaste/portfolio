import wallpaper from '../../assets/wallpaper.mp4'
import { DesktopWrapper, VideoBackground } from './Desktop.styles'
import DesktopIcon from './DesktopIcon'
import { desktopIcons, type DesktopIconConfig } from '../../config/desktopIcons.config'

const Desktop = () => {
  const handleIconDoubleClick = (icon: DesktopIconConfig) => {
    if (icon.action === 'link') {
      window.open(icon.target, '_blank')
    } else {
      // we'll hook this up to the window manager later
      console.log('open window:', icon.target)
    }
  }

  return (
    <DesktopWrapper>
      <VideoBackground
        src={wallpaper}
        autoPlay
        loop
        muted
      />
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