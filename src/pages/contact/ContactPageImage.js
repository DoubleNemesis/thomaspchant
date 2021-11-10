import { ContactImageContainer, ImageContainer } from "./ContactPageImageComponents"
import Tom from "./../../images/thomas_p_chant.png"

export default function ContactPageImage({ children, ...restProps }) {
    return (
        <ContactImageContainer display={restProps.display}>
            <ImageContainer>
                <img src={Tom} alt="Thomas P Chant Web Developer" />
            </ImageContainer>
        </ContactImageContainer>
    )
}