import styled from 'styled-components'

export const TabBar = styled.div`
  display: flex;
  padding: 4px 0 0 4px;
  background: #c0c0c0;
`

export const Tab = styled.div<{ isActive: boolean }>`
  padding: 3px 16px;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
  cursor: pointer;
  background: #c0c0c0;
  position: relative;
  top: 2px;
  border-top: 2px solid ${({ isActive }) => isActive ? '#ffffff' : '#808080'};
  border-left: 2px solid ${({ isActive }) => isActive ? '#ffffff' : '#808080'};
  border-right: 1px solid #404040;
  border-bottom: ${({ isActive }) => isActive ? 'none' : '2px solid #808080'};
  z-index: ${({ isActive }) => isActive ? 2 : 1};
  margin-right: 0;
`

export const TabContent = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #c0c0c0;
  padding: 12px;
  margin: 0 4px 4px 4px;
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  position: relative;
  z-index: 1;
`