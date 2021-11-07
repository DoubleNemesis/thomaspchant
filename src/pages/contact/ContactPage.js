import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import ContactForm from '../../components/contact/Contact'
import { TextContainer } from './ContactComponents'
import { TextBlock } from '../../components/blocks/TextBlock'
import { StyledH1 } from '../../components/text/StyledH1'

export default function ContactPage() {


    return (
        <Main>
            <Section>
                {/* <TextContainer>
                    I'll get back to you as soon as humanely possible, and usually within the hour.
                </TextContainer> */}
                <ContactForm/>
            </Section>
        </Main>
    )
}