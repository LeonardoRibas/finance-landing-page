import React from 'react'
import ServiceCard from '../ServiceCard'
import * as S from './styles'
import { MdSupervisorAccount, MdSecurity, MdLeaderboard } from 'react-icons/md'

const ServicesSection = () => {
  return (
    <S.Container>
      <ServiceCard
        icon={() => <MdSupervisorAccount size={56} />}
        title="Suporte"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
      />
      <ServiceCard
        icon={() => <MdSecurity size={56} />}
        title="Segurança"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
      />
      <ServiceCard
        icon={() => <MdLeaderboard size={56} />}
        title="Análise"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
      />
    </S.Container>
  )
}

export default ServicesSection
