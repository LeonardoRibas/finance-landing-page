import React from 'react'
import * as S from './styles'

type ButtonProps = {
  variant?: string
  text: string
}

const Button = ({ variant, text }: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Text>{text}</S.Text>
    </S.ButtonWrapper>
  )
}

export default Button
