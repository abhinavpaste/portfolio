import { useState, useEffect, useRef } from 'react'
import useSound from '../../hooks/useSound'
import windows from '../../assets/windows.png'
import StartMenu from '../StartMenu/StartMenu'
import {
  TaskbarWrapper,
  StartButton,
  Divider,
  Tray,
} from './Taskbar.styles'

const Taskbar = () => {
  const playSound = useSound()
  const [time, setTime] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      let h = now.getHours()
      const m = now.getMinutes().toString().padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setTime(`${h}:${m} ${ampm}`)
    }
    updateClock()
    const interval = setInterval(updateClock, 10000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef}>
      {isOpen && <StartMenu />}

      <TaskbarWrapper>
        <StartButton onClick={() => {   playSound() , setIsOpen(prev => !prev)}}>
          <img src={windows} alt="Windows" style={{ width: '18px', height: '18px' }} />
          <span>Start</span>
        </StartButton>

        <Divider />

        <Tray>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <rect x="2" y="5" width="3" height="4" fill="#404040" />
            <polygon points="5,5 9,2 9,12 5,9" fill="#404040" />
            <path d="M10 4 Q12 7 10 10" fill="none" stroke="#404040" strokeWidth="1" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <rect x="5" y="8" width="4" height="4" fill="none" stroke="#404040" strokeWidth="1" />
            <rect x="1" y="4" width="4" height="3" fill="none" stroke="#404040" strokeWidth="1" />
            <rect x="9" y="4" width="4" height="3" fill="none" stroke="#404040" strokeWidth="1" />
            <line x1="3" y1="4" x2="7" y2="8" stroke="#404040" strokeWidth="1" />
            <line x1="11" y1="4" x2="7" y2="8" stroke="#404040" strokeWidth="1" />
          </svg>
          <span>{time}</span>
        </Tray>
      </TaskbarWrapper>
    </div>
  )
}

export default Taskbar