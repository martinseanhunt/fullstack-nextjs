import styled from 'styled-components'

const Logo = () => {
  return (  
    <Container><img src="/logo-full-wh.png" alt="Scotts Bass Lessons Logo" /></Container>
  ) 
}

const Container = styled.h2`
  img { width: 220px; }
`

export default Logo
