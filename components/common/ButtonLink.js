import styled from 'styled-components'

const ButtonLink = styled.a`
  ${({ theme }) => `
    background: none;
    color: ${theme.colors.white};
    border:  3px solid ${theme.colors.white};
    border-radius: 5px;
    padding: 15px;
    font-size: ${theme.fonts.m.fontSize};
    font-weight: ${theme.fonts.weights.bold};
    transition: background 0.2s;

    @media (min-width: ${theme.breakpoints.xs}) {
      padding: 15px 30px;
    }
  
    /* TODO: Do we want to set this globally on a elements? */
    text-decoration: none;

    &&:hover {
      background: ${theme.colors.transparentBlack};
      cursor: pointer;
    }
  `}
`

export default ButtonLink
