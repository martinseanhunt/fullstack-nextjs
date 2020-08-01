import styled from 'styled-components'

const Row = styled.div`
  display: ${({ noFlex }) => noFlex ? 'block' : 'flex'};
  margin 0 auto;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 ${({ theme }) => theme.layout.gutters}px;
  max-width: ${({ theme }) => theme.layout.maxWidth}px;
`

export default Row