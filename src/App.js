import Header from './components/header/Header'
import Main from './components/main/Main'
import Section from './components/section/Section'
import Headline from './sections/headline/Headline'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Headline/>
        </Section>
      </Main>
    </>
  )
}

export default App;
