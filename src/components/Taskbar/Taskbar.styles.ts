import styled from 'styled-components'

export const TaskbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 28px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  gap: 4px;
  z-index: 1000;
  user-select: none;                                          
`

export const StartButton = styled.button`
  height: 22px;
  padding: 0 6px;
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #404040 #404040 #ffffff;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  font-family: 'Tahoma', Arial, sans-serif;

  &:active {
    border-color: #404040 #ffffff #ffffff #404040;
  }
`

export const Divider = styled.div`
  width: 2px;
  height: 20px;
  border-left: 1px solid #808080;
  border-right: 1px solid #ffffff;
  margin: 0 2px;
`

export const Tray = styled.div`
  margin-left: auto;
  height: 22px;
  padding: 0 6px;
  border: 1px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
`