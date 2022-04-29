import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 56px 0 56px 0;
  margin-bottom: 56px;
`

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  min-width: 500px;
  max-width: 700px;
  margin-right: 140px;
`

export const TextInfoWrapper = styled.div``

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${(props) => props.theme.color.secondary};
  margin-bottom: 24px;
`

export const Text = styled.p`\
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.color.text};

`

export const Divider = styled.div`
  width: 175px;
  height: 2px;
  background-color: ${(props) => props.theme.color.primary};
  margin-bottom: 24px;
`
