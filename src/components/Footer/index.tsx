import React from 'react'
import * as S from './styles'
import logo from '../../assets/logo-vert-white.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <S.Container>
      \
      <S.Logo src={logo} />
      <S.Text>Copyright © 2022 - Todos os direitos reservados.</S.Text>
    </S.Container>
  )
}

export default Footer
