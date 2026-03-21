import styled from 'styled-components'

export const MenuWrapper = styled.div`
  position: fixed;
  bottom: 32px;
  left: 0;
  width: 200px;
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #404040 #404040 #ffffff;
  box-shadow: 2px 2px 0 #000;
  z-index: 1001;
  display: flex;
`

export const SideBanner = styled.div`
  width: 26px;
  background: linear-gradient(to right, #000080, #3399ff);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 8px;
`

export const BannerText = styled.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Tahoma', Arial, sans-serif;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 2px;
`

export const MenuItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2px 0;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  font-size: 11px;
  font-family: 'Tahoma', Arial, sans-serif;
  cursor: pointer;

  &:hover {
    background: #000080;
    color: #ffffff;
  }
`

export const Separator = styled.div`
  margin: 2px 4px;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #ffffff;
`