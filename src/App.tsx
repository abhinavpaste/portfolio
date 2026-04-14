import { useRef } from 'react'
import Desktop from './components/Desktop/Desktop'
import Taskbar from './components/Taskbar/Taskbar'
import Window from './components/Window/Window'
import MainWindow, { type MainWindowRef } from './components/MainWindow/MainWindow'
import { WindowProvider, useWindowStore } from './store/windowStore'
import { ToolbarButton, ToolbarSep, AddressBar, AddressInput, StatusPanel } from './components/Window/Window.styles'
import { projects } from './config/projects.config'
import useSound from './hooks/useSound'
import ClockWindow from './components/Clockwindow/clockwindow'
import LinksWindow from './components/LinksWindow/LinksWindow'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import { useState } from 'react'
import Boot from './components/Boot/Boot'

const AppContent = () => {
  const { windows, closeWindow, minimizeWindow, openWindow } = useWindowStore()
  const portfolio = windows.find(w => w.id === 'portfolio')
  const detailWindows = windows.filter(w => w.id.startsWith('details-'))
  const playSound = useSound(0.3)
  const mainWindowRef = useRef<MainWindowRef>(null)
    const [booting, setBooting] = useState(true)

  if (booting) return <Boot onComplete={() => setBooting(false)} />

  const handlePortfolioOpen = (tab?: string) => {
    openWindow('portfolio')
    if (tab) {
      setTimeout(() => mainWindowRef.current?.setTab(tab), 50)
    }
  }

  const portfolioToolbar = (
    <>
      <ToolbarButton onClick={() => mainWindowRef.current?.goBack()}>
        ← Back
      </ToolbarButton>
      <ToolbarButton onClick={() => mainWindowRef.current?.goForward()}>
        → Forward
      </ToolbarButton>
      <ToolbarSep />
      <ToolbarButton onClick={() => playSound()}>↑ Up</ToolbarButton>
      <ToolbarSep />
      <AddressBar>
        <span>Address:</span>
        <AddressInput>C:\Users\Abhinav\Portfolio</AddressInput>
      </AddressBar>
    </>
  )

  const portfolioStatusBar = (
    <>
      <StatusPanel>{projects.length} object(s)</StatusPanel>
      <StatusPanel>Last modified: 2026</StatusPanel>
    </>
  )

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
  <Desktop 
  onPortfolioOpen={handlePortfolioOpen}
  onLinksOpen={() => openWindow('links')}
  onClockOpen={() => openWindow('clock')}
/>

      <ClockWindow />

      {portfolio?.isOpen && (
        <Window
          title="Portfolio.exe"
          width={830}
          height="520px"
          defaultPosition={{ x: 300, y: 50 }}
          isMinimized={portfolio.isMinimized}
          onClose={() => closeWindow('portfolio')}
          onMinimize={() => minimizeWindow('portfolio')}
          toolbar={portfolioToolbar}
          statusBar={portfolioStatusBar}
        >
          <MainWindow ref={mainWindowRef} />
        </Window>
      )}

      {detailWindows.filter(w => w.isOpen).map(w => (
  <Window
    key={w.id}
    title={w.title}
    width={500}
    height="550px"
    isMinimized={w.isMinimized}
    onClose={() => closeWindow(w.id)}
    onMinimize={() => minimizeWindow(w.id)}
  >
    <ProjectDetail projectId={w.id.replace('details-', '')} />
  </Window>
))}

      <LinksWindow />
      <Taskbar onOpenPortfolio={(tab) => handlePortfolioOpen(tab)} />
    </div>
  )
}

function App() {
  return (
    <WindowProvider>
      <AppContent />
    </WindowProvider>
  )
}

export default App