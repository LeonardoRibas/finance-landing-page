import React from 'react'
import GlobalStyle from './globalStyle'
import BannerSection from './components/BannerSection'
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BannerSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
