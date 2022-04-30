import React from 'react'
import ServiceCard from '../ServiceCard'
import * as S from './styles'
import { MdSupervisorAccount, MdSecurity, MdLeaderboard } from 'react-icons/md'
import theme from '../../styles/theme'

const ServicesSection = () => {
  return (
    <S.Container>
      <ServiceCard
        icon={() => (
          <MdSupervisorAccount size={56} color={theme.color.secondary} />
        )}
        title="Suporte"
        text="Com nosso suporte personalizado você terá todo o apio necessário pra investir seu dinheiro da melhor forma possível"
      />
      <ServiceCard
        icon={() => <MdSecurity size={56} color={theme.color.secondary} />}
        title="Segurança"
        text="Contamos com um sistema robusto e confiável, garantindo a segurança que você precisa para seus dados"
      />
      <ServiceCard
        icon={() => <MdLeaderboard size={56} color={theme.color.secondary} />}
        title="Análise"
        text="Para direcionar melhor seu dinheiro, conte com análises e relatórios completos sobre seus investimentos"
      />
    </S.Container>
  )
}

export default ServicesSection
