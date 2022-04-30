import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.secondary};
  margin-top: 56px;
  padding-top: 16px;
  padding-bottom: 16px;
`

export const Logo = styled.img`
  width: 100px;
  height: 30.84px;
  margin-right: 56px;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.color.white};
`
