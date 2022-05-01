import React from 'react'
import * as S from './styles'
import Button from '../Button'

const Form = () => {
  return (
    <S.Container>
      <S.CustomTextField
        id="standard-basic"
        label="Nome Completo"
        variant="standard"
        fullWidth
      />
      <S.CustomTextField
        id="standard-basic"
        label="Email"
        variant="standard"
        fullWidth
      />
      <S.CustomTextField
        id="standard-basic"
        label="Telefone"
        variant="standard"
        placeholder="11912341234"
        fullWidth
      />
      <S.CustomTextField
        id="standard-multiline-static"
        label="Mensagem"
        multiline
        rows={5}
        variant="standard"
        fullWidth
      />
      <S.ButtonDiv>
        <Button
          text="Enviar Mensagem"
          variant="primary"
          onClick={(e) => {
            e.preventDefault()
          }}
        />
      </S.ButtonDiv>
    </S.Container>
  )
}

export default Form
