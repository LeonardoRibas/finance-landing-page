import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import theme from '../../styles/theme'

export const Container = styled.form`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-between;
`

export const ButtonDiv = styled.div`
  width: 50%;
`

export const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  '& label.Mui-focused': {
    color: theme.color.secondary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.color.primary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
})
