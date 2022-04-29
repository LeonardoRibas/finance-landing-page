import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex: 1;
  height: 74px;
  justify-content: space-between;
  align-items center;
  margin-top: 32px;
  margin-bottom: 56px;
  padding: 0 15% 0 15%;

`

export const Logo = styled.img`
  width: 140px;
  height: 43.26px;\
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items center;
`
export const Link = styled.a`
  color: ${(props) => props.theme.color.secondary};
  font-weight: 400;
  margin-right: 40px;
  text-decoration: none;
`
