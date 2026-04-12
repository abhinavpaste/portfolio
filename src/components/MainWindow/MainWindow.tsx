import { useState, forwardRef, useImperativeHandle } from 'react'
import { TabBar, Tab, TabContent } from './MainWindow.styles'
import AboutTab from './tabs/AboutTab'
import ProjectsTab from './tabs/ProjectsTab'
import useSound from '../../hooks/useSound'
import { useWindowStore } from '../../store/windowStore'
import SkillsTab from './tabs/SkillsTab'
import ContactTab from './tabs/ContactTab'

const tabs = ['About', 'Projects', 'Skills', 'Contact']
export interface MainWindowRef {
  goBack: () => void
  goForward: () => void
  activeTab: string
  canGoBack: boolean
  canGoForward: boolean
  setTab: (tab: string) => void
}



const MainWindow = forwardRef<MainWindowRef>((_, ref) => {
  const [activeTab, setActiveTab] = useState('About')
  const [history, setHistory] = useState<string[]>(['About'])
  const [historyIndex, setHistoryIndex] = useState(0)
  const playSound = useSound(0.5)
  const { openWindow } = useWindowStore()

  const navigateTo = (tab: string) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(tab)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setActiveTab(tab)
  }

  const goBack = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const newIndex = currentIndex <= 0 ? tabs.length - 1 : currentIndex - 1
    setActiveTab(tabs[newIndex])
    playSound()
  }

  const goForward = () => {
    const currentIndex = tabs.indexOf(activeTab)
    const newIndex = currentIndex >= tabs.length - 1 ? 0 : currentIndex + 1
    setActiveTab(tabs[newIndex])
    playSound()
  }

useImperativeHandle(ref, () => ({
  goBack,
  goForward,
  activeTab,
  canGoBack: historyIndex > 0,
  canGoForward: historyIndex < history.length - 1,
  setTab: (tab: string) => {
    setActiveTab(tab)
  },
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
      case 'Skills': return <SkillsTab />
      case 'About': return <AboutTab />
      case 'Projects': return <ProjectsTab onOpenDetails={handleOpenDetails} />
      case 'Contact': return <ContactTab />
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