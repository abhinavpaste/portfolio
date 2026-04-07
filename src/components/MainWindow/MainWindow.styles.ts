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
export const ProjectItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 6px;
  background: #ffffff;
  color: #000000;
  border: 1px solid #808080;
  cursor: default;

  &:hover {
    background: #000080;
    color: #ffffff;
  }

  &:hover .proj-desc {
    color: #dddddd;
  }

  &:hover .proj-tag {
    background: #333399;
    border-color: #5555bb;
  }

  &:hover .proj-icon {
    background: #1a1a8a;
    border-color: #4444aa;
  }
`

export const TabContent = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #c0c0c0;
  padding: 9px;
  margin: 0 4px 4px 4px;
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  position: relative;
  z-index: 1;
`
export const ProjTitle = styled.span`
  font-weight: bold;
  font-size: 12px;
  font-family: 'Tahoma', Arial, sans-serif;
  color: #000000;

  ${ProjectItem}:hover & {
    color: #ffffff;
  }
`

export const ProjDesc = styled.div`
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
  line-height: 1.5;
  color: #202020;

  ${ProjectItem}:hover & {
    color: #dddddd;
  }
`

export const ProjTag = styled.span`
  background: #808080;
  color: #ffffff;
  padding: 1px 6px;
  font-size: 10px;
  font-family: 'Tahoma', Arial, sans-serif;
  border: 1px solid #404040;

  ${ProjectItem}:hover & {
    background: #333399;
    border-color: #5555bb;
  }
`

export const ProjIcon = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: #c0c0c0;
  border: 1px solid #808080;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  ${ProjectItem}:hover & {
    background: #1a1a8a;
    border-color: #4444aa;
  }
`