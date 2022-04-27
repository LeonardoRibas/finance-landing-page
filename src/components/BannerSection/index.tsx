import React from 'react'
import * as S from './styles'
import Button from '../Button'
import Image from '../../assets/banner_image.png'

const BannerSection = () => {
  return (
    <S.Container>
      <S.BannerInfoWrapper>
        <S.MainTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </S.MainTitle>
        <S.SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet.
        </S.SubTitle>
        <Button text="Faça uma Simulação" />
      </S.BannerInfoWrapper>
      <S.BannerImage src={Image} />
    </S.Container>
  )
}

export default BannerSection
