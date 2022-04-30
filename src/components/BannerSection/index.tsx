import React from 'react'
import * as S from './styles'
import Button from '../Button'
import Image from '../../assets/banner_image.png'
import theme from '../../styles/theme'

const BannerSection = () => {
  return (
    <S.Container>
      <S.BannerInfoWrapper>
        <S.MainTitle>
          Comece hoje sua jornada de investimentos com a{' '}
          <span style={{ color: theme.color.primary }}>Guerra Consórcios</span>
        </S.MainTitle>
        <S.SubTitle>
          Conte com a gente para fazer seus resultados cada vez melhores!
        </S.SubTitle>
        <Button size="large" text="Faça uma Simulação" />
      </S.BannerInfoWrapper>
      <S.BannerImage src={Image} />
    </S.Container>
  )
}

export default BannerSection
