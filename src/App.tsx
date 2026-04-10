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

const AppContent = () => {
  const { windows, closeWindow, minimizeWindow, openWindow } = useWindowStore()
  const portfolio = windows.find(w => w.id === 'portfolio')
  const detailWindows = windows.filter(w => w.id.startsWith('details-'))
  const playSound = useSound(0.3)
  const mainWindowRef = useRef<MainWindowRef>(null)

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
      <Desktop onPortfolioOpen={() => openWindow('portfolio')} />

      <ClockWindow />

      {portfolio?.isOpen && (
        <Window
          title="Projects — File Explorer"
          width={750}
          height="500px"
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
          width={400}
          isMinimized={w.isMinimized}
          onClose={() => closeWindow(w.id)}
          onMinimize={() => minimizeWindow(w.id)}
        >
          <div style={{ padding: '12px', fontFamily: 'Tahoma, Arial, sans-serif', fontSize: '11px' }}>
            Detailed view coming soon...
          </div>
        </Window>
      ))}

      <Taskbar />
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