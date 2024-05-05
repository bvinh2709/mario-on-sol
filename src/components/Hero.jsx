import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("./img/bg-mro.jpg");
    background-size: cover;
`

const Container = styled.div`
    height: 25%;
    width: 25%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
`

function Hero() {
  return (
    <>
        <Section>
            <Container>
                <img src="../../public/img/of-pro.jpg" className='profile'/>
            </Container>
        </Section>
    </>
  )
}

export default Hero
