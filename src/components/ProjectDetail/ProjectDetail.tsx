import { projects } from '../../config/projects.config'
import useSound from '../../hooks/useSound'

interface Props {
  projectId: string
}

const ProjectDetail = ({ projectId }: Props) => {
  const project = projects.find(p => p.id === projectId)
  const playSound = useSound(0.3)

  if (!project) return <div style={{ padding: '12px', fontFamily: 'Tahoma', fontSize: '11px' }}>Project not found.</div>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '8px' }}>

      {/* Title */}
      <div style={{
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'Tahoma, Arial, sans-serif',
        borderBottom: '2px solid',
        borderColor: '#808080',
        paddingBottom: '6px',
      }}>
        {project.title}
      </div>

      {/* Overview */}
      <fieldset style={{ border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', padding: '8px 12px', margin: 0 }}>
        <legend style={{ fontFamily: 'Tahoma', fontSize: '11px', padding: '0 4px' }}>Overview</legend>
        <div style={{ fontSize: '11px', fontFamily: 'Tahoma, Arial, sans-serif', lineHeight: '1.6' }}>
          {project.overview}
        </div>
      </fieldset>

      {/* Tech Stack */}
      <fieldset style={{ border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', padding: '8px 12px', margin: 0 }}>
        <legend style={{ fontFamily: 'Tahoma', fontSize: '11px', padding: '0 4px' }}>Tech Stack</legend>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {project.techStack.map(tech => (
            <span key={tech} style={{
              background: '#000080',
              color: '#ffffff',
              padding: '2px 8px',
              fontSize: '10px',
              fontFamily: 'Tahoma, Arial, sans-serif',
            }}>
              {tech}
            </span>
          ))}
        </div>
      </fieldset>

      {/* Features */}
      <fieldset style={{ border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', padding: '8px 12px', margin: 0 }}>
        <legend style={{ fontFamily: 'Tahoma', fontSize: '11px', padding: '0 4px' }}>Key Features</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {project.features.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: '6px', fontSize: '11px', fontFamily: 'Tahoma, Arial, sans-serif' }}>
              <span style={{ color: '#000080', flexShrink: 0 }}>►</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Challenges */}
      <fieldset style={{ border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', padding: '8px 12px', margin: 0 }}>
        <legend style={{ fontFamily: 'Tahoma', fontSize: '11px', padding: '0 4px' }}>Challenges</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {project.challenges.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: '6px', fontSize: '11px', fontFamily: 'Tahoma, Arial, sans-serif' }}>
              <span style={{ color: '#808080', flexShrink: 0 }}>►</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Links */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          style={{
            padding: '3px 12px',
            background: '#c0c0c0',
            border: '2px solid',
            borderColor: '#ffffff #808080 #808080 #ffffff',
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px',
            cursor: 'pointer',
          }}
          onClick={() => { playSound(); window.open(project.githubUrl, '_blank') }}
        >
          GitHub ↗
        </button>
        {project.demoUrl && (
          <button
            style={{
              padding: '3px 12px',
              background: '#c0c0c0',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px',
              cursor: 'pointer',
            }}
            onClick={() => { playSound(); window.open(project.demoUrl!, '_blank') }}
          >
            Demo ↗
          </button>
        )}
      </div>

    </div>
  )
}

export default ProjectDetail