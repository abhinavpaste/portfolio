import Window from '../Window/Window'
import { useWindowStore } from '../../store/windowStore'

const links = [
  {
    category: 'social',
    items: [
      { label: 'GitHub', url: 'https://github.com/abhinavpaste' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/abhinav-paste' },
      { label: 'Twitter', url: 'https://twitter.com/thunderavalt' },
    ],
  },
  {
    category: 'work',
    items: [
      { label: 'LeetCode', url: 'https://leetcode.com/u/ElmIQosKNk/' },
      { label: 'Resume', url: '/resume.pdf' },
      { label: 'Codeforces', url: 'https://codeforces.com/profile/valtrex' },
    ],
  },
]

const LinksWindow = () => {
  const { windows, closeWindow, minimizeWindow } = useWindowStore()
  const linksWindow = windows.find(w => w.id === 'links')

  if (!linksWindow?.isOpen) return null

  return (
    <Window
      title="links.exe"
      width={180}
      height="auto"
      showMenu={false}
      isMinimized={linksWindow.isMinimized}
      defaultPosition={{ x: window.innerWidth - 362, y: window.innerHeight - 520 }}
      onClose={() => closeWindow('links')}
      onMinimize={() => minimizeWindow('links')}
    >
      <div style={{
        padding: '6px 8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        fontFamily: 'Tahoma, Arial, sans-serif',
        fontSize: '13px',
      }}>
        {links.map(({ category, items }) => (
          <div key={category}>
            <div style={{ color: '#808080', marginBottom: '2px' }}>
              -- {category} --
            </div>
            {items.map(({ label, url }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '1px 0',
                }}
              >
                <span style={{ color: '#808080' }}>[-]</span>
                <span
                  style={{ color: '#000080', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => window.open(url, '_blank')}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Window>
  )
}

export default LinksWindow