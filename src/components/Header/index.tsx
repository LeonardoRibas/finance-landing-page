import React, { useState } from 'react'
import * as S from './styles'
import Logo from '../../assets/logo-vert.png'
import Button from '../Button'
import Drawer from '@mui/material/Drawer'
import theme from '../../styles/theme'
import { Box, List, ListItem, ListItemText } from '@mui/material'

type Props = {}

const Header = (props: Props) => {
  const [state, setState] = useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState(open)
    }

  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.LinksWrapper>
        <S.Link href="#">Simulação</S.Link>
        <S.Link href="#">Serviços</S.Link>
        <S.Link href="#">Sobre Nós</S.Link>
        <Button variant="secondary" size="small" text="Entre em contato" />

        <Drawer open={state} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
            onClick={() => setState(false)}
            onKeyDown={() => setState(false)}
          >
            <List>
              {['Simulação', 'Serviços', 'Sobre Nós', 'Entre em contato'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </S.LinksWrapper>
      <S.HamburguerIcon onClick={() => setState(true)} />
    </S.Container>
  )
}

export default Header
