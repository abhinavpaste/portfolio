import wallpaper from '../../assets/wallpaper.mp4'

const Desktop = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <video
        src={wallpaper}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
        }}
      />
    </div>
  )
}

export default Desktop