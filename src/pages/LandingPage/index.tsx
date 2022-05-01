import React, { useEffect } from 'react'
import BannerSection from '../../components/BannerSection'
import Header from '../../components/Header'
import ServicesSection from '../../components/ServicesSection'
import AboutUsSection from '../../components/AboutUsSection'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
import * as S from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <S.Container>
      <Header />
      <S.SectionContainer>
        <BannerSection />
        <ServicesSection />
        <AboutUsSection />
        <ContactSection />
      </S.SectionContainer>
      <Footer />
    </S.Container>
  )
}

export default LandingPage
