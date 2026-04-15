import { useState } from 'react'
import AboutTab from '../MainWindow/tabs/AboutTab'
import ProjectsTab from '../MainWindow/tabs/ProjectsTab'
import SkillsTab from '../MainWindow/tabs/SkillsTab'
import ContactTab from '../MainWindow/tabs/ContactTab'
import { useWindowStore } from '../../store/windowStore'

const tabs = ['About', 'Projects', 'Skills', 'Contact']

const MobileLayout = () => {
  const [activeTab, setActiveTab] = useState('About')
  const { openWindow } = useWindowStore()

  const handleOpenDetails = (projectId: string) => {
    openWindow(`details-${projectId}`)
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'About':    return <AboutTab />
      case 'Projects': return <ProjectsTab onOpenDetails={handleOpenDetails} />
      case 'Skills':   return <SkillsTab />
      case 'Contact':  return <ContactTab />
      default:         return null
    }
  }

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#008080',
      fontFamily: 'Tahoma, Arial, sans-serif',
      overflowY: 'auto',
    }}>
      {/* Header */}
      <div style={{
        background: '#000080',
        color: 'white',
        padding: '10px 16px',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        borderBottom: '2px solid #ffffff44',
      }}>
        📁 Abhinav's Portfolio
      </div>

      {/* Tab Bar */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        background: '#c0c0c0',
        borderBottom: '2px solid #808080',
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              width: '100%',
              padding: '12px 16px',
              textAlign: 'left',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '13px',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              background: activeTab === tab ? '#ffffff' : '#c0c0c0',
              color: '#000',
              border: 'none',
              borderBottom: '1px solid #808080',
              borderLeft: activeTab === tab ? '3px solid #000080' : '3px solid transparent',
              cursor: 'pointer',
            }}
          >
            {activeTab === tab ? '▶ ' : '   '}{tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{
        background: '#ffffff',
        margin: '12px',
        border: '2px solid #808080',
        borderRadius: '2px',
        padding: '12px',
        minHeight: '300px',
        overflowY: 'auto',
      }}>
        {renderTab()}
      </div>

      {/* Footer */}
      <div style={{
        background: '#c0c0c0',
        borderTop: '2px solid #ffffff',
        padding: '6px 12px',
        fontSize: '11px',
        color: '#444',
        textAlign: 'center',
      }}>
        {new Date().getFullYear()} · Abhinav's Portfolio
      </div>
    </div>
  )
}

export default MobileLayout