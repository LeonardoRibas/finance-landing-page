import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 56px 0 56px 0;
  margin-bottom: 56px;

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
    padding: 32px 0 32px 0;
    margin-bottom: 0;
  }
`
