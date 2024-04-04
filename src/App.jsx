import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Heading from "./components/Heading"
import Button from "./components/Button"
import Input from "./components/Input"
import Row from "./components/Row"

styled

function App() {
  return (
    <>
    <GlobalStyles/>
    <Row >
    <Row type='horizontal'>
      <Heading as="h1">
        Enjoy wooden cabins
      </Heading>
      <div>
        <Heading as="h2">
          register
        </Heading>

        <Button>Check in</Button>
        <Button variation='secondary' size='small' >Check out</Button>
      </div>
    </Row>
    <Row >
      <Heading as="h3">
        Form
      </Heading>
      <form>
        <Input type="number"></Input>
        <Input type="number"></Input>
      </form>
    </Row>
    </Row>
    </>
  )
}

export default App
