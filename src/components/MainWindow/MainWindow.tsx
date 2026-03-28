import { useState } from 'react'
import { TabBar, Tab, TabContent } from './MainWindow.styles'
import AboutTab from './tabs/AboutTab'
import ProjectsTab from './tabs/ProjectsTab'
import useSound from '../../hooks/useSound'
import { useWindowStore } from '../../store/windowStore'

const tabs = ['About', 'Projects', 'Skills', 'Contact']

const MainWindow = () => {
  const [activeTab, setActiveTab] = useState('About')
  const playSound = useSound(0.3)
  const { openWindow } = useWindowStore()

  const handleTabClick = (tab: string) => {
    playSound()
    setActiveTab(tab)
  }

  const handleOpenDetails = (projectId: string) => {
    openWindow(`details-${projectId}`)
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'About': return <AboutTab />
      case 'Projects': return <ProjectsTab onOpenDetails={handleOpenDetails} />
      default: return (
        <div style={{ fontFamily: 'Tahoma', fontSize: '11px' }}>
          Coming soon...
        </div>
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
}

export default MainWindow