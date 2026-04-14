import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`




export const BootWrapper = styled.div<{ fading: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000000;
  display: flex;
  flex-direction: column;
  animation: ${({ fading }) => fading ? fadeOut : 'none'} 1s ease forwards;
`

export const DosScreen = styled.div`
  flex: 1;
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #aaaaaa;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const DosLine = styled.div<{ visible: boolean }>`
  opacity: ${({ visible }) => visible ? 1 : 0};
  white-space: pre;
`

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: #aaaaaa;
  animation: ${blink} 1s infinite;
  vertical-align: middle;
  margin-left: 2px;
`

export const SplashScreen = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: opacity 0.5s ease;
  z-index: 9999;
`

export const SplashLogo = styled.div`
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
  letter-spacing: -1px;
`

export const SplashSub = styled.div`
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 14px;
  color: #c0c0c0;
  margin-bottom: 40px;
`

export const ProgressTrack = styled.div`
  width: 200px;
  height: 10px;
  background: #1a1a1a;
  border: 1px solid #444444;
  overflow: hidden;
`

export const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: linear-gradient(to right, #000080, #1084d0);
  transition: width 0.3s ease;
`