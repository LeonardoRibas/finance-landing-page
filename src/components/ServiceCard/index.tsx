import React from 'react'
import { IconType } from 'react-icons/lib'
import * as S from './styles'

type ServiceCardProps = {
  icon: IconType
  title: string
  text: string
}

const ServiceCard = ({ icon, title, text }: ServiceCardProps) => {
  return (
    <S.Container>
      {React.createElement(icon)}
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}

export default ServiceCard
