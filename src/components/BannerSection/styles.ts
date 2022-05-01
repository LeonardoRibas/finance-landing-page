import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 0 56px 0;
  margin-bottom: 56px;

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
    padding: 32px 0 32px 0;
    margin-bottom: 0;
  }
`

export const BannerInfoWrapper = styled.div`
  max-width: 1000px;

  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    margin-bottom: 48px;
  }
`

export const MainTitle = styled.h1`
  color: ${(props) => props.theme.color.secondary};
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 48px;

  @media (max-width: 1224px) {
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 32px;
  }
`

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 48px;
  max-width: 70%;

  @media (max-width: 1224px) {
    text-align: center;
  }
`

export const BannerImage = styled.img`
  display: flex;
  width: 330px;
  height: 525.43px;

  @media (max-width: 414px) {
    width: 250px;
    height: auto;
  }
`
