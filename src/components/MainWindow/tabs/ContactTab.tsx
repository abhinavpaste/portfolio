import githubIcon from '../../../assets/github.png'
import linkedinIcon from '../../../assets/linkedin.png'
import twitterIcon from '../../../assets/twitter.png'
import gmailIcon from '../../../assets/gmail.png'

const ContactTab = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Contact links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' ,padding:'20px'}}>
        {[
          { label: 'GitHub', value: '@abhinavpaste', icon: githubIcon, url: 'https://github.com/abhinavpaste' },
          { label: 'LinkedIn', value: 'abhinav-paste', icon: linkedinIcon, url: 'https://linkedin.com/in/abhinav-paste' },
          { label: 'Email', value: 'abhinavspaste@gmail.com', icon: gmailIcon, url: 'mailto:abhinavspaste@gmail.com' },
          { label: 'Twitter', value: '@thunderavalt', icon: twitterIcon, url: 'https://x.com/thundervalt' },
        ].map(({ label, value, icon, url }) => (
          <div key={label} style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            fontSize: '13px',
            fontFamily: 'Tahoma, Arial, sans-serif',
          }}>
            {typeof icon === 'string' && !icon.startsWith('http') && icon.length <= 2
              ? <span style={{ fontSize: '16px' }}>{icon}</span>
              : <img src={icon as string} alt={label} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            }
            <span style={{ fontWeight: 'bold', minWidth: '80px' }}>{label}:</span>
            <span
              style={{ color: '#000080', textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => window.open(url, '_blank')}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Note fieldset */}
      <fieldset style={{
        border: '2px solid',
        borderColor: '#808080 #ffffff #ffffff #808080',
        padding: '8px 12px',
        margin: 0,
      }}>
        <legend style={{
          fontFamily: 'Tahoma, Arial, sans-serif',
          fontSize: '11px',
          padding: '0 4px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span>ℹ️</span> Note
        </legend>

        <div style={{
          fontSize: '11px',
          fontFamily: 'Tahoma, Arial, sans-serif',
          lineHeight: '1.6',
          color: '#202020',
        }}>
          Open to internship and collaboration opportunities. 
          Best reached via email or LinkedIn — I try to respond within a day or two.
        </div>
      </fieldset>

    </div>
  )
}

export default ContactTab