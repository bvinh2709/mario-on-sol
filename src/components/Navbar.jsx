import React from 'react'
import styled from 'styled-components'

// const Section = styled.div`
//     padding-top: 0.4rem;
//     display: flex;
//     justify-content: center;
// `

// const Container = styled.nav`
//     width: 100%;
//     background-color: transparent;
//     font-size: 1.2rem;
//     display: flex;
//     justify-content: center;
// `

function Navbar() {


  return (
    // <Section>
    //     <Container className='brand nav-button'>
    //         $MRO
    //     </Container>
    //     <Container className='brand nav-button'>
    //         Landing
    //     </Container>
    //     <Container className='brand nav-button'>
    //         History
    //     </Container>
    //     <Container className='brand nav-button'>
    //         Mission
    //     </Container>
    //     <Container className='brand nav-button'>
    //         Tokenomics
    //     </Container>
    //     <Container className='brand nav-button'>
    //         Roadmap
    //     </Container>

    // </Section>
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top transparent">
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="/">$MRO</a>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">LANDING</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">HISTORY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MISSION</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TOKENOMICS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ROADMAP</a>
                        </li>
                    </ul>
                    </div>
                </div>

            </div>
        </nav>

    </>
  )
}

export default Navbar
