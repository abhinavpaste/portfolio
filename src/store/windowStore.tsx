import { createContext, useContext, useState } from 'react'

export interface WindowState {
  id: string
  title: string
  isOpen: boolean
  isMinimized: boolean
}

interface WindowStore {
  windows: WindowState[]
  openWindow: (id: string) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  toggleWindow: (id: string) => void
}

const WindowContext = createContext<WindowStore | null>(null)

const initialWindows: WindowState[] = [
  {
    id: 'portfolio',
    title: 'Abhinav Paste — Portfolio',
    isOpen: true,
    isMinimized: false,
  },
  {
    id: 'clock',
    title: 'Clock',
    isOpen: true,
    isMinimized: false,
  },
  {
    id: 'details-navsh',
    title: 'navsh — Project Details',
    isOpen: false,
    isMinimized: false,
  },
  {
    id: 'details-georisk',
    title: 'Go Job Queue — Project Details',
    isOpen: false,
    isMinimized: false,
  },
  {
    id: 'details-portfolio',
    title: 'Win98 Portfolio — Project Details',
    isOpen: false,
    isMinimized: false,
  },
  {
  id: 'links',
  title: 'Links',
  isOpen: true,
  isMinimized: false,
},
]

export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>(initialWindows)

  const openWindow = (id: string) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, isOpen: true, isMinimized: false } : w
    ))
  }

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, isOpen: false } : w
    ))
  }

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, isMinimized: true } : w
    ))
  }

  const toggleWindow = (id: string) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ))
  }

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, minimizeWindow, toggleWindow }}>
      {children}
    </WindowContext.Provider>
  )
}

export const useWindowStore = () => {
  const ctx = useContext(WindowContext)
  if (!ctx) throw new Error('useWindowStore must be used inside WindowProvider')
  return ctx
}