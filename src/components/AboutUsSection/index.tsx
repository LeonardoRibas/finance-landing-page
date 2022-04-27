import React from 'react'
import * as S from './styles'
import image from '../../assets/team_images3x.png'

const AboutUsSection = () => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.TextInfoWrapper>
        <S.Title>Nós somos Guerra!</S.Title>
        <S.Divider />
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis.
        </S.Text>
      </S.TextInfoWrapper>
    </S.Container>
  )
}

export default AboutUsSection
