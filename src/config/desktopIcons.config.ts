import reseIcon from '../assets/rese.png'
import projectsIcon from '../assets/projects.png'
import twitterIcon from '../assets/twitter.png'
import leetcodeIcon from '../assets/leetcode-icon.png'
import gh from '../assets/gh.png'
import linksIcon from '../assets/links.png'
import linkedinIcon from '../assets/linkedin.png'
import pfIcon from '../assets/pf.png'
import timedateIcon from '../assets/timedate.png'


export type IconAction = 'window' | 'link'

export interface DesktopIconConfig {
  id: string
  label: string
  icon: string
  action: IconAction
  target: string
  position: { x: number; y: number }
}

export const desktopIcons: DesktopIconConfig[] = [
  {
    id: 'resume',
    label: 'Resume',
    icon: reseIcon,
    action: 'link',
    target: '/abhinavpaste.pdf',
    position: { x: 120, y: 180 },
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: projectsIcon,
    action: 'window',
    target: 'portfolio',
    position: { x: 200, y: 180 },
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: gh,
    action: 'link',
    target: 'https://github.com/abhinavpaste',
    position: { x: 20, y: 30 },
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    icon: leetcodeIcon,
    action: 'link',
    target: 'https://leetcode.com/u/ElmIQosKNk/',
    position: { x: 20, y: 260 },
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: twitterIcon,
    action: 'link',
    target: 'https://twitter.com/thundervalt',
    position: { x: 20, y: 180 },
    
  },
  {
  id: 'links',
  label: 'links.exe',
  icon: linksIcon,
  action: 'window',
  target: 'links',
  position: { x: 200, y: 320 },
},
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: linkedinIcon,
    action: 'link',
    target: 'https://linkedin.com/in/abhinav-paste',
    position: { x: 20, y: 105 },
  },
  {
  id: 'portfolio-icon',
  label: 'Portfolio.exe',
  icon: pfIcon,
  action: 'window',
  target: 'portfolio',
  position: { x: 120, y: 260 },
},
{
  id: 'timedate-icon',
  label: 'timedate.exe',
  icon: timedateIcon,
  action: 'window',
  target: 'clock',
  position: { x: 1160, y: 500 },
},
  
]