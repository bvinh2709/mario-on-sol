import Hero from "./components/Hero"
import History from "./components/History"
import Mission from "./components/Mission"
import Tokenomics from "./components/Tokenomics"
import Roadmap from "./components/Roadmap"
import Navbar from "./components/Navbar"
import styled from "styled-components"
import Landing from "./components/Landing"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <>
      <Container>
      {/* <Navbar /> */}
        <Landing />
        <Hero />
        <History />
        <Mission />
        <Tokenomics />
        <Roadmap />
      </Container>
    </>
  )
}

export default App
