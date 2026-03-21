import {
  MenuWrapper,
  SideBanner,
  BannerText,
  MenuItems,
  MenuItem,
  Separator,
} from './StartMenu.styles'

const menuItems = [
  { label: 'About Me', icon: '👤' },
  { label: 'Projects', icon: '📁' },
  { label: 'Skills', icon: '📝' },
  { label: 'Contact', icon: '✉️' },
]

const StartMenu = () => {
  return (
    <MenuWrapper>
      <SideBanner>
        <BannerText>Windows 98</BannerText>
      </SideBanner>

      <MenuItems>
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </MenuItem>
        ))}

        <Separator />

        <MenuItem>
          <span>🔴</span>
          <span>Shut Down</span>
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}

export default StartMenu