import React from 'react'
import * as S from './styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  text: string
}

const Button = ({ variant = 'primary', size = 'small', text }: ButtonProps) => {
  return (
    <S.ButtonWrapper variant={variant} size={size}>
      <S.Text>{text}</S.Text>
    </S.ButtonWrapper>
  )
}

export default Button
