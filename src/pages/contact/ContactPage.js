import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import ContactForm from '../../components/contact/Contact'
import { TextContainer } from './ContactComponents'
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
                    <p>
                    Whether you are in the early planning phase or ready to go full-steam ahead, I'm really happy to discuss your project ideas with you.
                    I'll provide you with a detailed no-obligation quote and you can take as much time as you need to decide whether to go ahead.
                    </p>
                </TextContainer>
            </Section>
            <Section>
                {/* <ContactFormNode/> */}
                <ContactForm />
            </Section>
        </Main>
    )
}