import Desktop from './components/Desktop/Desktop'
import Taskbar from './components/Taskbar/Taskbar'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Desktop />
      <Taskbar />
    </div>
  )
}

export default App