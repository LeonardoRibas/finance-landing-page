import React from 'react'
import * as S from './styles'
import Button from '../Button'
import Image from '../../assets/banner_image.png'
import theme from '../../styles/theme'

const BannerSection = () => {
  return (
    <S.Container>
      <S.BannerInfoWrapper data-aos="fade-right">
        <S.MainTitle>
          Comece hoje sua jornada de investimentos com a{' '}
          <span style={{ color: theme.color.primary }}>Guerra Consórcios</span>
        </S.MainTitle>
        <S.SubTitle>
          Conte com a gente para fazer seus resultados cada vez melhores!
        </S.SubTitle>
        <Button size="large" text="Faça uma Simulação" />
      </S.BannerInfoWrapper>
      <S.BannerImage src={Image} data-aos="fade-left" />
    </S.Container>
  )
}

export default BannerSection
