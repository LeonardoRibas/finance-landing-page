import React from 'react'
import { IconType } from 'react-icons/lib'
import * as S from './styles'

type ContactInfoProps = {
  icon: IconType
  text: string
}

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
  return (
    <S.Container>
      {React.createElement(icon)}
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}

export default ContactInfo
