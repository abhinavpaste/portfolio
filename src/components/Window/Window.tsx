import { useState, useRef, useEffect } from 'react'
import {
  WindowWrapper,
  TitleBar,
  TitleLeft,
  TitleControls,
  TitleButton,
  WindowBody,
  MenuBar,
  MenuBarItem,
} from './Window.styles'
import useSound from '../../hooks/useSound'

interface Props {
  title: string
  icon?: string
  width?: number
  isMinimized?: boolean
  defaultPosition?: { x: number; y: number }
  onClose?: () => void
  onMinimize?: () => void
  children: React.ReactNode
}

const Window = ({
  title,
  icon,
  width = 600,
  isMinimized = false,
  defaultPosition,
  onClose,
  onMinimize,
  children,
}: Props) => {
  const playSound = useSound(0.3)

  const defaultX = defaultPosition?.x ?? Math.round(window.innerWidth / 2 - width / 2)
  const defaultY = defaultPosition?.y ?? Math.round(window.innerHeight / 2 - 300)

  const [position, setPosition] = useState({ x: defaultX, y: defaultY })
  const [isActive, setIsActive] = useState(true)

  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      })
    }
    const handleMouseUp = () => { isDragging.current = false }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (isMinimized) return null

  return (
    <WindowWrapper x={position.x} y={position.y} width={width}>
      <TitleBar isActive={isActive} onMouseDown={handleMouseDown}>
        <TitleLeft>
          {icon && <img src={icon} alt="" style={{ width: '14px', height: '14px' }} />}
          <span>{title}</span>
        </TitleLeft>
        <TitleControls>
          <TitleButton onClick={() => { playSound(); onMinimize?.() }}>_</TitleButton>
          <TitleButton onClick={() => playSound()}>□</TitleButton>
          <TitleButton onClick={() => { playSound(); onClose?.() }}>✕</TitleButton>
        </TitleControls>
      </TitleBar>

      <MenuBar>
        <MenuBarItem>File</MenuBarItem>
        <MenuBarItem>Edit</MenuBarItem>
        <MenuBarItem>View</MenuBarItem>
        <MenuBarItem>Help</MenuBarItem>
      </MenuBar>

      <WindowBody>
        {children}
      </WindowBody>
    </WindowWrapper>
  )
}

export default Window