import styled from 'styled-components'

import Row from '../layout/Row'

const Content = styled(Row)`${({ theme }) => `
flex-direction: column;
align-items: flex-start;
flex-wrap: nowrap;
padding-top: 30px;
padding-bottom: 30px;

@media (min-width: ${theme.breakpoints.s}) and (min-height: 900px) {
  height: 100vh;
  max-height: 900px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-evenly;
}
`}`

export default Content
