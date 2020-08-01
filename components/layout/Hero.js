import styled, { keyframes } from 'styled-components'

import Row from './Row'

// TODO: Mobile styling
// TODO: this isn't a hero anymore! Move it out of this component
// TODO: Add live activity stream! 

const Hero = () => {
  return (  
    <BackGroundImages>
      <Container>
        <Content>
          <Logo><img src="/logo-full-wh.png" alt="Scotts Bass Lessons Logo" /></Logo>
          <HeadLine>
            Master <br/>
            Your 
            <span>Fretboard</span>
          </HeadLine>
          <SubHeading>
            The <b>unofficial</b> companion app for the <b>Scotts bass lessons</b> course on unlocking the fretboard. 
            Track your progress and share with the community.
          </SubHeading>
          <Button href="/api/login">Signup / Login to Get Started</Button>
        </Content>
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


// TODO fix position of element so still have bg on scroll ? 
const BackGroundImages = styled.div`
  animation: ${imageSwap} 9s linear infinite;
  background-size: cover;
  background-position: center;

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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: visible;
  flex-direction: column;
  background: #202022;
  background-color: rgba(0, 0, 0, 0.45);

  @media (min-width: 992px) {
    background: none;
  }
`

const Content = styled(Row)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  max-height: 900px;
  align-items: flex-start;
  flex-wrap: nowrap;
`

// TODO: Probably move this out in to seperate component
const Logo = styled.h2`
  img { width: 220px; }
`

// TODO: pull out sizes etc in to theme
const HeadLine = styled.h1`
  font-size: 14.0rem;
  letter-spacing: -.5rem;
  line-height: 0.8em;
  font-weight: 900;
  text-transform: uppercase;

  span {
    display: block; 
    color: #FDF04E;
  }
`

const SubHeading = styled.p`
  font-size: 2.4rem;
  color: #fff;
  font-weight: 400;
  max-width: 750px;
`
// TODO nota button anymore
const Button = styled.a`
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

export default Hero