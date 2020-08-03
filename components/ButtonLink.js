import styled from 'styled-components'

// TODO: See if radius, button padding values end up getting reused anywhere, if so move in to theme
const ButtonLink = styled.a`
  ${({ theme }) => `
    background: none;
    color: ${theme.colors.white};
    border:  3px solid ${theme.colors.white};
    border-radius: 5px;
    padding: 15px 30px;
    font-size: ${theme.fontSizes.m};
    font-weight: bold;
    transition: background 0.2s;

    /* TODO: Do we want to set this globally? */
    text-decoration: none;

    &&:hover {
      /* TODO: Does this transparentblack want to be moved in to the theme? */
      background: rgba(0,0,0,0.2);
      cursor: pointer;
    }
  `}
`

export default ButtonLink
