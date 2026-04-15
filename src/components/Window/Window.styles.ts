import styled from 'styled-components'
export const WindowWrapper = styled.div<{ x: number; y: number; width: number; height?: string }>`
  position: fixed;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height ?? '600px'};
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #404040 #404040 #ffffff;
  box-shadow: 2px 2px 0 #000000;
  display: flex;
  flex-direction: column;
  z-index: 100;
  user-select: none;

  @media (max-width: 768px) {
    position: relative !important;
    left: auto !important;
    top: auto !important;
    width: calc(100vw - 12px) !important;
    max-width: 420px;
    height: auto !important;
    margin: 6px auto;
    box-shadow: 1px 1px 0 #000000;
  }
`
export const TitleBar = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => isActive 
    ? 'linear-gradient(to right, #000080, #1084d0)' 
    : 'linear-gradient(to right, #808080, #b0b0b0)'};
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  cursor: grab;

  @media (max-width: 768px) {
    cursor: default;
  }
  flex-shrink: 0;
`


export const TitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #ffffff;
  font-size: 11px;
  font-weight: bold;
  font-family: 'Tahoma', Arial, sans-serif;
`

export const TitleIcon = styled.img`
  width: 14px;
  height: 14px;
`

export const TitleControls = styled.div`
  display: flex;
  gap: 2px;
`

export const TitleButton = styled.button`
  width: 16px;
  height: 14px;
  background: #c0c0c0;
  border: 1px solid;
  border-color: #ffffff #404040 #404040 #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 9px;
  font-weight: bold;
  font-family: 'Tahoma', Arial, sans-serif;
  padding: 0;

  &:active {
    border-color: #404040 #ffffff #ffffff #404040;
  }
`

export const WindowBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: visible;
  }
`

export const MenuBar = styled.div`
  background: #c0c0c0;
  border-bottom: 1px solid #808080;
  display: flex;
  padding: 2px 4px;
`

export const MenuBarItem = styled.div`
  padding: 2px 6px;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
  cursor: pointer;

  &:hover {
    background: #000080;
    color: #ffffff;
  }
`



export const ToolbarButton = styled.button`
  height: 22px;
  padding: 0 8px;
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
  cursor: pointer;

  &:active {
    border-color: #808080 #ffffff #ffffff #808080;
  }
`

export const ToolbarSep = styled.div`
  width: 2px;
  height: 18px;
  border-left: 1px solid #808080;
  border-right: 1px solid #ffffff;
  margin: 0 2px;
`

export const AddressBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export const AddressInput = styled.div`
  flex: 1;
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  background: white;
  padding: 1px 4px;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
`

export const StatusPanel = styled.div`
  border: 1px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  padding: 0 6px;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
`
