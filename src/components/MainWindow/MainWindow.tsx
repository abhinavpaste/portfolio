import { useState, forwardRef, useImperativeHandle } from 'react'
import { TabBar, Tab, TabContent } from './MainWindow.styles'
import AboutTab from './tabs/AboutTab'
import ProjectsTab from './tabs/ProjectsTab'
import useSound from '../../hooks/useSound'
import { useWindowStore } from '../../store/windowStore'

const tabs = ['About', 'Projects', 'Skills', 'Contact']

export interface MainWindowRef {
  goBack: () => void
  goForward: () => void
  activeTab: string
  canGoBack: boolean
  canGoForward: boolean
}

const MainWindow = forwardRef<MainWindowRef>((_, ref) => {
  const [activeTab, setActiveTab] = useState('About')
  const [history, setHistory] = useState<string[]>(['About'])
  const [historyIndex, setHistoryIndex] = useState(0)
  const playSound = useSound(0.3)
  const { openWindow } = useWindowStore()

  const navigateTo = (tab: string) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(tab)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setActiveTab(tab)
  }

  const goBack = () => {
    if (historyIndex <= 0) return
    const newIndex = historyIndex - 1
    setHistoryIndex(newIndex)
    setActiveTab(history[newIndex])
    playSound()
  }

  const goForward = () => {
    if (historyIndex >= history.length - 1) return
    const newIndex = historyIndex + 1
    setHistoryIndex(newIndex)
    setActiveTab(history[newIndex])
    playSound()
  }

  useImperativeHandle(ref, () => ({
    goBack,
    goForward,
    activeTab,
    canGoBack: historyIndex > 0,
    canGoForward: historyIndex < history.length - 1,
  }))

  const handleTabClick = (tab: string) => {
    playSound()
    navigateTo(tab)
  }

  const handleOpenDetails = (projectId: string) => {
    openWindow(`details-${projectId}`)
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'About': return <AboutTab />
      case 'Projects': return <ProjectsTab onOpenDetails={handleOpenDetails} />
      default: return (
        <div style={{ fontFamily: 'Tahoma', fontSize: '11px' }}>Coming soon...</div>
      )
    }
  }

  return (
    <>
      <TabBar>
        {tabs.map(tab => (
          <Tab
            key={tab}
            isActive={activeTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabBar>
      <TabContent>
        {renderTab()}
      </TabContent>
    </>
  )
})

export default MainWindow