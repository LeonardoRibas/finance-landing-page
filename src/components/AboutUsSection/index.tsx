import React from 'react'
import * as S from './styles'
import image from '../../assets/team_images3x.png'
import smallerImage from '../../assets/team_image.png'

const AboutUsSection = () => {
  return (
    <S.Container>
      <S.Image src={image} data-aos="fade-right" />
      <S.SmallerImage src={smallerImage} data-aos="fade-right" />
      <S.TextInfoWrapper data-aos="fade-left">
        <S.Title>Nós somos Guerra!</S.Title>
        <S.Divider />
        <S.Text>
          Aqui na Guerra você contará com um time de peso de especialistas para
          te ajudar na sua jornada. Profissionais altamente qualificados e com
          vasta experiência no mercado financeiro estão prontos para batalhar
          pelos seus resultados!
        </S.Text>
      </S.TextInfoWrapper>
    </S.Container>
  )
}

export default AboutUsSection
