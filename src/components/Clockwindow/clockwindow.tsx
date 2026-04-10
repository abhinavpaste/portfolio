import { useState, useEffect } from 'react'
import Window from '../Window/Window'
import { useWindowStore } from '../../store/windowStore'

const ClockWindow = () => {
  const { windows, closeWindow, minimizeWindow } = useWindowStore()
  const clockWindow = windows.find(w => w.id === 'clock')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      let h = now.getHours()
      const m = now.getMinutes().toString().padStart(2, '0')
      const s = now.getSeconds().toString().padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setTime(`${h}:${m}:${s} ${ampm}`)
      setDate(now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!clockWindow?.isOpen) return null

  return (
    <Window
      title="timedate.exe"
      width={220}
      height="auto"
      showMenu={false}
      isMinimized={clockWindow.isMinimized}
      defaultPosition={{ x: window.innerWidth - 370, y: 50 }}
      onClose={() => closeWindow('clock')}
      onMinimize={() => minimizeWindow('clock')}
    >
      <div style={{
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          
          <span style={{
            fontSize: '18px',
            color: '#000080',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}>
            {time}
          </span>
        </div>
        <div style={{
          fontSize: '10px',
          color: '#404040',
          borderTop: '1px solid #808080',
          paddingTop: '6px',
          width: '100%',
          textAlign: 'center',
        }}>
          {date}
        </div>
      </div>
    </Window>
  )
}

export default ClockWindow