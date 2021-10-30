import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Section from './layout/section/Section'
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
