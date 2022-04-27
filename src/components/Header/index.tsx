import React from 'react'
import * as S from './styles'
import Logo from '../../assets/logo-vert.png'
import Button from '../Button'

type Props = {}

const Header = (props: Props) => {
  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.Text>Simulação</S.Text>
      <S.Text>Serviços</S.Text>
      <S.Text>Sobre Nós</S.Text>
      <Button text="Entre em contato" />
    </S.Container>
  )
}

export default Header
