import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import HeadlineImage from './headline/headlineImage/HeadlineImage'
import HeadlineText from './headline/headlineText/HeadlineText'
import FirstSection from './firstSection/FirstSection'
import SecondSection from './secondSection/SecondSection'


export default function Home() {
    return (
        <Main>
            <Section 
            display="flex"
            flexDirection="row-reverse"
            >
                <HeadlineImage />
                <HeadlineText />
            </Section>
            <Section>
                <FirstSection />
                <SecondSection />
            </Section>
        </Main>
    )
}