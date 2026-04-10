import cLogo from '../assets/skills/c.png'
import cppLogo from '../assets/skills/c++.png'
import goLogo from '../assets/skills/go.png'
import javaLogo from '../assets/skills/java.png'
import cssLogo from '../assets/skills/css.png'
import expressLogo from '../assets/skills/express.png'
import htmlLogo from '../assets/skills/html.png'
import nodejsLogo from '../assets/skills/nodejs.png'
import reactLogo from '../assets/skills/react.png'
import typescriptLogo from '../assets/skills/typescript.png'
import mongodbLogo from '../assets/skills/mongodb.png'
import mysqlLogo from '../assets/skills/mysql.png'
import postgresLogo from '../assets/skills/postgres.png'    
import gitLogo from '../assets/skills/git.png'
import linuxLogo from '../assets/skills/linux.png'

export interface Skill {
  name: string
  logo: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Go', logo: goLogo },
      { name: 'Java', logo: javaLogo },
    ],
  },
  
  {
    id: 'webdev',
    title: 'Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React', logo: reactLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express', logo: expressLogo },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'PostgreSQL', logo: postgresLogo },
    ],
    },
    {
  id: 'systems-versioncontrol',
  title: 'Systems & Version Control',
  skills: [
    { name: 'Linux', logo: linuxLogo },
    { name: 'Git', logo: gitLogo },
  ],
},
]