import { HeadlineImageContainer, ImageContainer, ImageLabel } from "./HeadlineImageComponents"
import Tom from "../../../../images/tombg.png"

export default function HeadlineImage({ children, ...restProps }) {
    return (
        <HeadlineImageContainer restProps>
            <ImageContainer>
                <img src={Tom} alt="Thomas P Chant Web Developer" />
            </ImageContainer>
            <ImageLabel>
                <h2>Thomas Chant - Freelance Web-Developer</h2>
            </ImageLabel>
        </HeadlineImageContainer>
    )
}