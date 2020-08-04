import styled from 'styled-components'

const SubHeading = styled.p`${({ theme }) => `
font-size: ${theme.fonts.m.fontSize};
color: ${theme.colors.white};
font-weight: ${theme.fonts.weights.medium};
max-width: 100%;
padding-bottom: 40px;

@media (min-width: ${theme.breakpoints.s}) and (min-height: 900px) {
  padding-bottom: 0;
}

@media (min-width: ${theme.breakpoints.s}) {
  font-size: ${theme.fonts.l.fontSize};
  max-width: 750px;
}
`}`

export default SubHeading
