import React from 'react'
import * as S from './styles'
import Logo from '../../assets/logo-vert.png'
import Button from '../Button'

type Props = {}

const Header = (props: Props) => {
  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.LinksWrapper>
        <S.Link href="#">Simulação</S.Link>
        <S.Link href="#">Serviços</S.Link>
        <S.Link href="#">Sobre Nós</S.Link>
        <Button variant="secondary" text="Entre em contato" />
      </S.LinksWrapper>
    </S.Container>
  )
}

export default Header
