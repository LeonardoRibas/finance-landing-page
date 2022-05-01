import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 56px 0 56px 0;
  margin-bottom: 56px;

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
    padding: 32px 0 32px 0;
    margin-bottom: 0;
  }
`

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  min-width: 500px;
  max-width: 700px;
  margin-right: 140px;

  @media (max-width: 1224px) {
    display: none;
  }
`

export const SmallerImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 24px;

  @media (min-width: 1224px) {
    display: none;
  }
`

export const TextInfoWrapper = styled.div`
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${(props) => props.theme.color.secondary};
  margin-bottom: 24px;
  max-width: 700px;
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
