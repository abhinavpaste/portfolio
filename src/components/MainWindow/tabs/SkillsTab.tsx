import { skillCategories } from '../../../config/skills.config'

const SkillsTab = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {skillCategories.map(category => (
        <fieldset
          key={category.id}
          style={{
            border: '2px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            padding: '8px 12px',
            margin: 0,
          }}
        >
          <legend style={{
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px',
            color: '#000000',
            padding: '0 4px',
          }}>
            {category.title}
          </legend>

          {/* Skills row */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {category.skills.map(skill => (
              <div
                key={skill.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  background: '#c0c0c0',
                  border: '2px solid',
                  borderColor: '#ffffff #808080 #808080 #ffffff',
                  fontFamily: 'Tahoma, Arial, sans-serif',
                  fontSize: '11px',
                  cursor: 'default',
                }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  )
}

export default SkillsTab