import leetcodeIcon from '../assets/leetcode-icon.png'
import githubIcon from '../assets/github-icon.png'
import resumeIcon from '../assets/resume-icon.png'

export type IconAction = 'window' | 'link'

export interface DesktopIconConfig {
  id: string
  label: string
  icon: string
  action: IconAction
  target: string        // window id if action is 'window', URL if action is 'link'
  position: { x: number; y: number }
}

export const desktopIcons: DesktopIconConfig[] = [
  {
    id: 'github',
    label: 'GitHub',
    icon: githubIcon,
    action: 'link',
    target: 'https://github.com/abhinavpaste',
    position: { x: 20, y: 20 },
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    icon: leetcodeIcon,
    action: 'link',
    target: 'https://leetcode.com/u/ElmIQosKNk/',
    position: { x: 20, y: 110 },
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: resumeIcon,
    action: 'link',
    target: 'https://your-resume-link.com',
    position: { x: 20, y: 200 },
  },
  {
    id: 'portfolio',
    label: 'My Portfolio',
    icon: resumeIcon,   // add a PNG to assets and import it
    action: 'window',
    target: 'portfolio',
    position: { x: 100, y: 300 },
  }
]