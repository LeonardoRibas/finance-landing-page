import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.color.text};
  margin-left: 16px;
`
