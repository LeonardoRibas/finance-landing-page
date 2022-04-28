import React from 'react'
import * as S from './styles'

type ButtonProps = {
  platform?: 'web' | 'mobile'
  variant?: 'primary' | 'secondary'
  text: string
}

const Button = ({
  platform = 'web',
  variant = 'primary',
  text,
}: ButtonProps) => {
  return (
    <S.ButtonWrapper variant={variant} platform={platform}>
      <S.Text>{text}</S.Text>
    </S.ButtonWrapper>
  )
}

export default Button
