import React from 'react'
import ContactInfo from '../ContactInfo'
import Form from '../Form'
import * as S from './styles'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const ContactSection = () => {
  return (
    <S.Container>
      <S.TextInfoWrapper>
        <S.Title>Entre em contato</S.Title>
        <S.SubTitle>
          Preencha o formulário e entraremos em contato com você
        </S.SubTitle>
        <ContactInfo
          icon={() => <FiPhone />}
          text="+55 (61) 3081-5555 ou +55 (61) 99249-0548"
        />
        <ContactInfo
          icon={() => <FiMail />}
          text="guerra@guerraconsorcios.com.br"
        />
        <ContactInfo
          icon={() => <FiMapPin />}
          text="The Union Office (Lt 3, Torre E, sala 06) EPIA Trecho 3 - Asa Sul, Brasília - DF "
        />
      </S.TextInfoWrapper>
      <Form />
    </S.Container>
  )
}

export default ContactSection
