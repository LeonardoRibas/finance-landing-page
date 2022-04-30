import React from 'react'
import ContactInfo from '../ContactInfo'
import Form from '../Form'
import * as S from './styles'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi'
import theme from '../../styles/theme'

const ContactSection = () => {
  return (
    <S.Container>
      <S.TextInfoWrapper>
        <S.Title>Entre em contato</S.Title>
        <S.SubTitle>
          Preencha o formulário e entraremos em contato com você
        </S.SubTitle>
        <ContactInfo
          icon={() => <FiPhone size={24} color={theme.color.text} />}
          text="+55 (61) 3081-5555 ou +55 (61) 99249-0548"
        />
        <ContactInfo
          icon={() => <FiMail size={24} color={theme.color.text} />}
          text="guerra@guerraconsorcios.com.br"
        />
        <ContactInfo
          icon={() => <FiMapPin size={24} color={theme.color.text} />}
          text="The Union Office (Lt 3, Torre E, sala 06) EPIA Trecho 3 - Asa Sul, Brasília - DF "
        />
        <S.SocialMediaWrapper>
          <FiInstagram size={24} color={theme.color.text} />
          <FiFacebook size={24} color={theme.color.text} />
          <FiLinkedin size={24} color={theme.color.text} />
        </S.SocialMediaWrapper>
      </S.TextInfoWrapper>
      <Form />
    </S.Container>
  )
}

export default ContactSection
