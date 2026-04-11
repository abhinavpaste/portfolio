import photo from '../../../assets/photo.jpg'
import githubIcon from '../../../assets/github.png'
import linkedinIcon from '../../../assets/linkedin.png'
import resumeIcon from '../../../assets/resume-icon.png'

const AboutTab = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '10px 0' }}>

      {/* Profile section */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <img
          src={photo}
          alt="Abhinav Paste"
          style={{
            width: '110px',
            height: '110px',
            objectFit: 'cover',
            border: '2px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            flexShrink: 0,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'Tahoma, Arial, sans-serif',
          }}>
            Abhinav Paste
          </div>
          <div style={{
            fontSize: '18px',
            color: '#404040',
            fontFamily: 'Tahoma, Arial, sans-serif',
          }}>
            Fullstack Developer and Systems Enthusiast
          </div>
          <div style={{
            fontSize: '15px',
            fontFamily: 'Tahoma, Arial, sans-serif',
            marginTop: '4px',
          }}>
            Pre-final year CSE undergrad
          </div>
        </div>
      </div>

      {/* Links fieldset */}
      <fieldset style={{
        border: '2px solid',
        borderColor: '#808080 #ffffff #ffffff #808080',
        padding: '8px 12px',
        margin: 0,
      }}>
        <legend style={{
          fontFamily: 'Tahoma, Arial, sans-serif',
          fontSize: '14px',
          color: '#000000',
          padding: '0 4px',
        }}>
          Links
        </legend>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { label: 'GitHub', url: 'https://github.com/abhinavpaste', icon: githubIcon },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abhinav-paste/', icon: linkedinIcon },
            { label: 'Resume', url: 'YOUR_RESUME_URL', icon: resumeIcon },
          ].map(({ label, url, icon }) => (
            <div key={label} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', fontFamily: 'Tahoma, Arial, sans-serif' }}>
              <img src={icon} alt={label} style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
              <span style={{ color: '#404040', minWidth: '60px' }}>{label}:</span>
              <span
                style={{ color: '#000080', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => window.open(url, '_blank')}
              >
                {url}
              </span>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Bio */}
      <div style={{
        fontSize: '15px',
        fontFamily: 'Tahoma, Arial, sans-serif',
        lineHeight: '1.6',
        border: '2px solid',
        borderColor: '#808080 #ffffff #ffffff #808080',
        background: '#ffffff',
        padding: '8px',
      }}>
        Pre-final year CSE student with a passion for low-level systems programming
        and infrastructure. Builder of navsh — a modular POSIX-compliant Unix shell in C.
        Active competitive programmer with 400+ problems solved on LeetCode.
        Targeting SRE and kernel engineering roles at companies like Nutanix, Red Hat, and Canonical.
      </div>

    </div>
  )
}

export default AboutTab