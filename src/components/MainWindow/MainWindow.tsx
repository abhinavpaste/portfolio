import { useState } from 'react'
import { TabBar, Tab, TabContent } from './MainWindow.styles'
import AboutTab from './tabs/AboutTab'
import useSound from '../../hooks/useSound'

const tabs = ['About', 'Projects', 'Skills', 'Contact']

const MainWindow = () => {
  const [activeTab, setActiveTab] = useState('About')
  const playSound = useSound(0.3)

  const handleTabClick = (tab: string) => {
    playSound()
    setActiveTab(tab)
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'About': return <AboutTab />
      default: return <div style={{ fontFamily: 'Tahoma', fontSize: '11px' }}>Coming soon...</div>
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