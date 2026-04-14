import {
  MenuWrapper,
  SideBanner,
  BannerText,
  MenuItems,
  MenuItem,
  Separator,
} from './StartMenu.styles'
import useSound from '../../hooks/useSound'
import aboutIcon from '../../assets/about.png'
import contactIcon from '../../assets/contact.png'
import skillsIcon from '../../assets/skills.png'
import projectsIcon from '../../assets/projects.png'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import twitterIcon from '../../assets/twitter.png'
import restartIcon from '../../assets/restart.png'
import shutdownIcon from '../../assets/shutdown.png'


interface Props {
  onOpenPortfolio: (tab: string) => void
}

const menuItems = [
  { label: 'About Me', icon: aboutIcon, tab: 'About' },
  { label: 'Projects', icon: projectsIcon, tab: 'Projects' },
  { label: 'Skills', icon: skillsIcon, tab: 'Skills' },
  { label: 'Contact', icon: contactIcon, tab: 'Contact' },
]

const socialItems = [
  { label: 'GitHub', icon: githubIcon, url: 'https://github.com/abhinavpaste' },
  { label: 'LinkedIn', icon: linkedinIcon, url: 'https://linkedin.com/in/abhinav-paste' },
  { label: 'Twitter', icon: twitterIcon, url: 'https://twitter.com/thunderavalt' },
]

const StartMenu = ({ onOpenPortfolio }: Props) => {
  const playSound = useSound(0.3)

  return (
    <MenuWrapper>
      <SideBanner>
        <BannerText>Windows 98</BannerText>
      </SideBanner>

      <MenuItems>
        {menuItems.map((item) => (
  <MenuItem key={item.label} onClick={() => { playSound(); onOpenPortfolio(item.tab) }}>
    <img src={item.icon} alt={item.label} style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
    <span>{item.label}</span>
  </MenuItem>
))}

        <Separator />

        {socialItems.map((item) => (
          <MenuItem key={item.label} onClick={() => { playSound(); window.open(item.url, '_blank') }}>
            <img src={item.icon} alt={item.label} style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
            <span>{item.label}</span>
          </MenuItem>
        ))}

        <Separator />

        <MenuItem onClick={() => { playSound(); location.reload() }}>
            <img src={restartIcon} alt="Restart" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
            <span>Restart</span>
          </MenuItem>

          <MenuItem onClick={() => { playSound(); window.close() }}>
            <img src={shutdownIcon} alt="Shut Down" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
            <span>Shut Down</span>
          </MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}

export default StartMenu