import Desktop from './components/Desktop/Desktop'
import Taskbar from './components/Taskbar/Taskbar'
import Window from './components/Window/Window'
import MainWindow from './components/MainWindow/MainWindow'
import { WindowProvider, useWindowStore } from './store/windowStore'

const AppContent = () => {
  const { windows, closeWindow, minimizeWindow, openWindow } = useWindowStore()
  const portfolio = windows.find(w => w.id === 'portfolio')
  const detailWindows = windows.filter(w => w.id.startsWith('details-'))

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Desktop onPortfolioOpen={() => openWindow('portfolio')} />

      {portfolio?.isOpen && (
        <Window
          title={portfolio.title}
          width={800}
          isMinimized={portfolio.isMinimized}
          onClose={() => closeWindow('portfolio')}
          onMinimize={() => minimizeWindow('portfolio')}
        >
          <MainWindow />
        </Window>
      )}

      {detailWindows.filter(w => w.isOpen).map(w => (
        <Window
          key={w.id}
          title={w.title}
          width={600}
          isMinimized={w.isMinimized}
          onClose={() => closeWindow(w.id)}
          onMinimize={() => minimizeWindow(w.id)}
        >
          <div style={{
            padding: '12px',
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px',
          }}>
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