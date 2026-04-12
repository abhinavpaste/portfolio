import { useState, useEffect } from 'react'
import {
  BootWrapper,
  DosScreen,
  DosLine,
  Cursor,
} from './Boot.styles'

const DOS_LINES = [
  'BIOS Version 4.51PG',
  'Copyright (C) 1985-1998, Award Software Inc.',
  '',
  'CPU: Intel Pentium II 450MHz',
  'Memory Test: 65536K OK',
  '',
  'Detecting Primary Master ... ST320430A',
  'Detecting Primary Slave  ... None',
  '',
  'Press DEL to enter SETUP',
  '',
  'Starting portfolio.exe...',
  '',
  'C:\\> _',
]

interface Props {
  onComplete: () => void
}

const Boot = ({ onComplete }: Props) => {
  const [visibleLines, setVisibleLines] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (visibleLines < DOS_LINES.length) {
      const delay = DOS_LINES[visibleLines] === '' ? 100 : 150
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setFading(true)
        setTimeout(onComplete, 1000)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <BootWrapper fading={fading}>
      <DosScreen>
        {DOS_LINES.slice(0, visibleLines).map((line, i) => (
          <DosLine key={i} visible={true}>
            {line}
            {i === visibleLines - 1 && line === 'C:\\> _' && <Cursor />}
          </DosLine>
        ))}
      </DosScreen>
    </BootWrapper>
  )
}

export default Boot