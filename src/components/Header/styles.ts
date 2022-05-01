import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

export const Container = styled.nav`
  display: flex;
  flex: 1;
  height: 74px;
  justify-content: space-between;
  align-items center;
  margin-top: 32px;
  margin-bottom: 56px;
  padding: 0 15% 0 15%;

  @media (max-width: 1224px) {
    padding: 0 5% 0 5%;
  }
`

export const Logo = styled.img`
  width: 140px;
  height: 43.26px;\
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items center;
  
  @media (max-width: 1224px) {
    display: none;
  }
`
export const Link = styled.a`
  color: ${(props) => props.theme.color.secondary};
  font-weight: 400;
  margin-right: 40px;
  text-decoration: none;
`
export const HamburguerIcon = styled(FiMenu).attrs((props) => ({
  size: 24,
  color: props.theme.color.secondary,
}))`
  @media (min-width: 1224px) {
    display: none;
  }
`
