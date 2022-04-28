import styled from 'styled-components'

type ButtonStyleProps = {
  platform?: 'web' | 'mobile'
  variant?: 'primary' | 'secondary'
}

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${(props) => (props.platform === 'mobile' ? '4px' : '8px')};
  padding: ${(props) =>
    props.platform === 'mobile' ? '8px 16px 8px 16px' : '12px 32px 12px 32px'};
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 600;
  background: ${(props) =>
    props.variant === 'secondary'
      ? props.theme.color.secondary
      : props.theme.color.primary};
`

export const Text = styled.p``
