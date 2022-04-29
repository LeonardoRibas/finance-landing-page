import React from 'react'
import GlobalStyle from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
