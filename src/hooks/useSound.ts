import { useCallback } from 'react'
import clickSound from '../assets/click.mp3'

const useSound = (volume: number = 0.6) => {
  const play = useCallback(() => {
    const audio = new Audio(clickSound)
    audio.volume = volume
    audio.play()
  }, [volume])

  return play
}

export default useSound