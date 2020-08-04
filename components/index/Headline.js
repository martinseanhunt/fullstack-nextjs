import styled from 'styled-components'

const HeadLine = styled.h1`${({ theme }) => `
  font-size: ${theme.fonts.xl.responsive.xs.fontSize};
  letter-spacing: ${theme.fonts.xl.responsive.s.letterSpacing};
  line-height: ${theme.fonts.xl.responsive.s.lineHeight};
  font-weight: ${theme.fonts.weights.heavyBold};
  text-transform: uppercase;
  padding: 40px 0;

  span {
    display: block; 
    color: ${theme.colors.highlightYellow};
  }

  @media (min-width: ${theme.breakpoints.xs}) {
    font-size: ${theme.fonts.xl.responsive.s.fontSize};
  }

  @media (min-width: ${theme.breakpoints.s}) {
    font-size: ${theme.fonts.xl.responsive.m.fontSize};
    letter-spacing: ${theme.fonts.xl.responsive.m.letterSpacing};
    line-height: ${theme.fonts.xl.responsive.m.lineHeight};
  }

  @media (min-width: ${theme.breakpoints.m}) {
    font-size: ${theme.fonts.xl.fontSize};
    font-size: ${theme.fonts.xl.letterSpacing};
    line-height: ${theme.fonts.xl.lineHeight};
  }

  @media (min-width: ${theme.breakpoints.s}) and (min-height: 900px) {
    padding: 0;
  }

  @media (min-width: ${theme.breakpoints.s}) and (max-height: 899px) {
    font-size: ${theme.fonts.xl.responsive.m.fontSize};
    letter-spacing: ${theme.fonts.xl.responsive.m.letterSpacing};
    line-height: ${theme.fonts.xl.responsive.m.lineHeight};
  }
`}`

export default HeadLine
