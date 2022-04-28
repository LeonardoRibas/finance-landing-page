import React from 'react'
import * as S from './styles'
import Button from '../Button'
import TextField from '@mui/material/TextField'

const Form = () => {
  return (
    <S.Container>
      <TextField id="standard-basic" label="Nome Completo" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Telefone" variant="standard" />
      <TextField
        id="standard-multiline-static"
        label="Mensagem"
        multiline
        rows={5}
        variant="standard"
      />
      <Button text="Enviar Mensagem" />
    </S.Container>
  )
}

export default Form
