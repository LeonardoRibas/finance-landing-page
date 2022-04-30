import React from 'react'
import * as S from './styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  text: string
  onClick?: (e: any) => void
}

const Button = ({
  variant = 'primary',
  size = 'small',
  text,
  onClick,
}: ButtonProps) => {
  return (
    <S.ButtonWrapper variant={variant} size={size} onClick={onClick}>
      <S.Text>{text}</S.Text>
    </S.ButtonWrapper>
  )
}

export default Button
