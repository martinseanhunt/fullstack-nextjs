import styled, { keyframes } from 'styled-components'

import Row from './Row'

// TODO: Mobile styling

// TODO BONUS: Add live activity stream!

const FullPageBackground = ({ children }) => {
  return (  
    <BackGroundImages>
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </BackGroundImages>
  ) 
}

// TODO: See what values can be moved out in to theme

// TODO - make this animation dynamic so any amount of images
// can be passed as props!
const imageSwap = keyframes`
  0%, 15%, 100% { background-image: url('/hero_1.jpg') }
  20%, 35% { background-image: url('/hero_2.jpg') }
  40%, 55% { background-image: url('/hero_3.jpg') }
  60%, 75% { background-image: url('/hero_4.jpg') }
  80%, 95% { background-image: url('/hero_5.jpg') }
`


// TODO fix position of element so still have bg on scroll ? 
const BackGroundImages = styled.div`
  animation: ${imageSwap} 9s linear infinite;
  background-size: cover;
  background-position: center;
  background-color: #212125;
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
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.45);

  @media (min-width: 992px) {
    background: none;
  }
`

const Content = styled(Row)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 200vh;
  max-height: 900px;
  align-items: flex-start;
  flex-wrap: nowrap;
`

export default FullPageBackground
