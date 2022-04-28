import styled from 'styled-components'

type ButtonStyleProps = {
  variant?: 'primary' | 'secondary'
  size?: 'large' | 'small'
}

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: ${(props) =>
    props.size === 'small' ? '12px 32px 12px 32px' : '16px 80px 16px 80px'};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => (props.size === 'small' ? '16px' : '24px')};
  font-weight: ${(props) => (props.size === 'small' ? '600' : '700')};
  background: ${(props) =>
    props.variant === 'secondary'
      ? props.theme.color.secondary
      : props.theme.color.primary};
`

export const Text = styled.p``
