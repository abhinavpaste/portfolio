import { useState } from 'react'
import { IconWrapper, IconImage, IconLabel } from './Desktop.styles'
import type { DesktopIconConfig } from '../../config/desktopIcons.config'
import useSound from '../../hooks/useSound'

interface Props {
  icon: DesktopIconConfig
  onDoubleClick: (icon: DesktopIconConfig) => void
}

const DesktopIcon = ({ icon, onDoubleClick }: Props) => {
  const [selected, setSelected] = useState(false)
  const playSound = useSound(0.3)

  const handleClick = () => {
    setSelected(true)
    playSound()
  }

  const handleDoubleClick = () => {
    onDoubleClick(icon)
  }

  // deselect when clicking elsewhere
  const handleBlur = () => setSelected(false)

  return (
    <IconWrapper
      x={icon.position.x}
      y={icon.position.y}
      className={selected ? 'selected' : ''}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <IconImage src={icon.icon} alt={icon.label} />
      <IconLabel>{icon.label}</IconLabel>
    </IconWrapper>
  )
}

export default DesktopIcon