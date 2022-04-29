import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 0 56px 0;
  margin-bottom: 56px;
`

export const BannerInfoWrapper = styled.div`
  min-width: 500px;
  max-width: 1000px;
`

export const MainTitle = styled.h1`
  color: ${(props) => props.theme.color.secondary};
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 48px;
`

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 48px;
  max-width: 70%;
`

export const BannerImage = styled.img`
  width: 330px;
  height: 525.43px;
`
