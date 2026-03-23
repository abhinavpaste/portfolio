import Desktop from './components/Desktop/Desktop'
import Taskbar from './components/Taskbar/Taskbar'
import Window from './components/Window/Window'
import MainWindow from './components/MainWindow/MainWindow'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Desktop />
      <Window title="Abhinav Paste — Portfolio" width={750
        
      }>
        <MainWindow />
      </Window>
      <Taskbar />
    </div>
  )
}

export default App