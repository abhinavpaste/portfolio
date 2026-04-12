import reseIcon from '../assets/rese.png'
import projectsIcon from '../assets/projects.png'
import twitterIcon from '../assets/twitter.png'
import leetcodeIcon from '../assets/leetcode-icon.png'
import gh from '../assets/gh.png'
import linkedinIcon from '../assets/linkedin.png'


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
    target: '/resume.pdf',
    position: { x: 20, y: 20 },
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: projectsIcon,
    action: 'window',
    target: 'portfolio',
    position: { x: 20, y: 110 },
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: gh,
    action: 'link',
    target: 'https://github.com/abhinavpaste',
    position: { x: 20, y: 200 },
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    icon: leetcodeIcon,
    action: 'link',
    target: 'https://leetcode.com/u/ElmIQosKNk/',
    position: { x: 20, y: 290 },
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: twitterIcon,
    action: 'link',
    target: 'https://twitter.com/thunderavalt',
    position: { x: 20, y: 380 },
    
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: linkedinIcon,
    action: 'link',
    target: 'https://linkedin.com/in/abhinav-paste',
    position: { x: 20, y: 470 },
  },
]