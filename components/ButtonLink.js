import styled from 'styled-components'

// TODO: get values from theme
const ButtonLink = styled.a`
  background: none;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 1.6rem;
  font-weight: bold;
  transition: background 0.2s;
  text-decoration: none;

  &&:hover {
    background: rgba(0,0,0,0.2);
    cursor: pointer;
  }
`

export default ButtonLink
