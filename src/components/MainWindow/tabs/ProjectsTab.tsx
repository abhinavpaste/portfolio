import { projects } from '../../../config/projects.config'
import useSound from '../../../hooks/useSound'
import { ProjectItem, ProjTitle, ProjDesc, ProjTag, ProjIcon } from '../MainWindow.styles'

interface Props {
  onOpenDetails: (projectId: string) => void
}

const ProjectsTab = ({ onOpenDetails }: Props) => {
  const playSound = useSound(0.3)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {projects.map((project) => (
        <ProjectItem key={project.id}>

          <ProjIcon>
            {project.id === 'navsh' ? '🖥️' : project.id === 'georisk' ? '⊕' : '🪟'}
          </ProjIcon>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ProjTitle>{project.title}</ProjTitle>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  style={{
                    padding: '1px 8px',
                    background: '#c0c0c0',
                    border: '2px solid',
                    borderColor: '#ffffff #808080 #808080 #ffffff',
                    fontFamily: 'Tahoma, Arial, sans-serif',
                    fontSize: '11px',
                    cursor: 'pointer',
                    color: '#000000',
                  }}
                  onClick={() => { playSound(); window.open(project.githubUrl, '_blank') }}
                >
                  GitHub
                </button>
                <button
                  style={{
                    padding: '1px 8px',
                    background: '#c0c0c0',
                    border: '2px solid',
                    borderColor: '#ffffff #808080 #808080 #ffffff',
                    fontFamily: 'Tahoma, Arial, sans-serif',
                    fontSize: '11px',
                    cursor: 'pointer',
                    color: '#000000',
                  }}
                  onClick={() => { playSound(); onOpenDetails(project.id) }}
                >
                  Details
                </button>
              </div>
            </div>

            <ProjDesc>{project.shortDesc}</ProjDesc>

            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '2px' }}>
              {project.techStack.map(tech => (
                <ProjTag key={tech}>{tech}</ProjTag>
              ))}
            </div>

          </div>
        </ProjectItem>
      ))}
    </div>
  )
}

export default ProjectsTab