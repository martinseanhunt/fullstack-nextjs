import styled, { keyframes } from 'styled-components'

const FullPageBackground = ({ children }) => {
  return (  
    <BackGroundImages>
      <Container>
        {children}
      </Container>
    </BackGroundImages>
  ) 
}

// TODO - make this animation dynamic so any amount of images
// can be passed as props!
const imageSwap = keyframes`
  0%, 15%, 100% { background-image: url('/hero_1.jpg') }
  20%, 35% { background-image: url('/hero_2.jpg') }
  40%, 55% { background-image: url('/hero_3.jpg') }
  60%, 75% { background-image: url('/hero_4.jpg') }
  80%, 95% { background-image: url('/hero_5.jpg') }
`

const BackGroundImages = styled.div`
  animation: ${imageSwap} 9s linear infinite;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  background-attachment: fixed;
  max-width: 100vw; 
  overflow: hidden;

  /* Use this to preload images so there's no flash on the transitions */
  &&:after {
    position: absolute; 
    width: 0; 
    height: 0; 
    overflow: hidden; 
    z-index: -1;
    content: url('/hero_1.jpg') url('/hero_2.jpg') url('/hero_3.jpg') url('/hero_4.jpg') url('/hero_5.jpg');
  }
`

// TODO: pull out flexbox stuff and create a Grid component which I can extend here
const Container = styled.div`${({ theme }) => `
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  flex-direction: column;
  background-color: ${theme.colors.lessTransparentBlack};

  @media (min-width: ${theme.breakpoints.m}) {
    background: none;
  }
`}`

export default FullPageBackground
