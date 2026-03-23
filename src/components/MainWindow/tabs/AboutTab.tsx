import photo from '../../../assets/photo.jpg'

const AboutTab = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Profile section */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <img
          src={photo}
          alt="Abhinav Paste"
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            border: '2px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            flexShrink: 0,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Tahoma, Arial, sans-serif',
          }}>
            Abhinav Paste
          </div>
          <div style={{
            fontSize: '11px',
            color: '#404040',
            fontFamily: 'Tahoma, Arial, sans-serif',
          }}>
            Systems Developer & SRE Enthusiast
          </div>
          <div style={{
            fontSize: '11px',
            fontFamily: 'Tahoma, Arial, sans-serif',
            marginTop: '4px',
          }}>
            NMIT Bengaluru — 3rd Year CSE
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff' }} />

      {/* Info fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { label: 'Location', value: 'Bengaluru, Karnataka' },
          { label: 'Interests', value: 'Systems Programming, Kernel Engineering, SRE' },
          { label: 'Languages', value: 'C, C++, Go, Python, Bash' },
          { label: 'Currently', value: 'Building navsh — a POSIX shell in C' },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: 'flex', gap: '8px', fontSize: '11px', fontFamily: 'Tahoma, Arial, sans-serif' }}>
            <span style={{ color: '#404040', minWidth: '80px' }}>{label}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff' }} />

      {/* Bio */}
      <div style={{
        fontSize: '11px',
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