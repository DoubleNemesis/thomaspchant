import Header from './components/header/Header'
import Main from './components/main/Main'
import Section from './components/section/Section'
import HeadlineImage from './sections/headline/headlineImage/HeadlineImage'
import HeadlineText from './sections/headline/headlineText/HeadlineText'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <HeadlineImage/>
          <HeadlineText/>
        </Section>
      </Main>
    </>
  )
}

export default App;
