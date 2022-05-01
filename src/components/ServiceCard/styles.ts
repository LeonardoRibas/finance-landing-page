import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 312px;
  margin: 0 32px 0 32px;

  @media (max-width: 1224px) {
    margin: 32px 0 32px 0;
  }
`
export const Title = styled.h3`
  color: ${(props) => props.theme.color.secondary};
  font-size: 32px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 24px;
`

export const Text = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.color.text};
  text-align: center;
`
