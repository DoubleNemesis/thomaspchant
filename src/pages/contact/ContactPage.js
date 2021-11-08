import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import ContactForm from '../../components/contact/Contact'
import ContactFormNode from '../../components/contact/ContactNode'
import { TextContainer } from './ContactComponents'
import { TextBlock } from '../../components/blocks/TextBlock'
import { StyledH1 } from '../../components/text/StyledH1'
import ContactPageImage from './ContactPageImage'

export default function ContactPage() {


    return (
        <Main>
            <Section
                display="flex"
                justifyContent="center"
                >
                <ContactPageImage />
                <TextContainer>
                    I'm really happy to discuss your project ideas with you whether you are in the early planning phase or ready to go full-steam ahead.
                    I can then provide you with a detailed no-obligation quote and you can take as much time as you need to decide whether to go ahead.
                </TextContainer>
            </Section>
            <Section>
                {/* <ContactFormNode/> */}
                <ContactForm />
            </Section>
        </Main>
    )
}