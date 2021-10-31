import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Footer from './layout/footer/Footer'
import Section from './components/section/Section'
import HeadlineImage from './sections/homePage/headline/headlineImage/HeadlineImage'
import HeadlineText from './sections/homePage/headline/headlineText/HeadlineText'
import FirstSection from './sections/homePage/firstSection/FirstSection'
import SecondSection from './sections/homePage/secondSection/SecondSection'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <HeadlineImage/>
          <HeadlineText/>
        </Section>
        <Section>
          <FirstSection/>
          <SecondSection/>
        </Section>
      </Main>
      <Footer/>
    </>
  )
}

export default App;
