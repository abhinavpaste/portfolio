import styled from 'styled-components'

export const WindowWrapper = styled.div<{ x: number; y: number; width: number }>`
  position: fixed;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  width: ${({ width }) => width}px;
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #404040 #404040 #ffffff;
  box-shadow: 2px 2px 0 #000000;
  display: flex;
  flex-direction: column;
  z-index: 100;
  user-select: none;
`

export const TitleBar = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => isActive ? '#000080' : '#808080'};
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  cursor: grab;
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