import styled from 'styled-components'

export const DesktopWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
`

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`


export const IconWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 4px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;

  &:hover {
    border: 1px dotted #ffffff;
    background: rgba(0, 0, 128, 0.3);
  }

  &.selected {
    border: 1px dotted #ffffff;
    background: rgba(0, 0, 128, 0.5);
  }
`

export const IconImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`



export const IconLabel = styled.span`
  color: #ffffff;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
  text-align: center;
  text-shadow: 1px 1px 1px #000000;
  line-height: 1.2;
  word-break: break-word;
  user-select: none;
`