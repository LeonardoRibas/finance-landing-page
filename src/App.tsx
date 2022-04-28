import React from 'react'
import GlobalStyle from './styles/globalStyle'
import BannerSection from './components/BannerSection'
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <BannerSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  )
}

export default App
