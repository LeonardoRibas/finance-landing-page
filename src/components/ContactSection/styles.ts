import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 56px 0 56px 0;

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
    padding: 32px 0 32px 0;
  }
`

export const TextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 140px;

  @media (max-width: 1224px) {
    align-items: center;
    text-align: center;
    margin-right: 0;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.color.secondary};
  margin-bottom: 32px;
`

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.color.text};
  margin-bottom: 48px;
`

export const ContactInfoWrapper = styled.div`
  @media (max-width: 1224px) {
    display: none;
  }
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 1224px) {
    display: none;
  }
`
