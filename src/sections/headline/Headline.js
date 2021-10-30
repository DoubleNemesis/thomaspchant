import { HeadlineContainer, ImageContainer } from "./HeadlineComponents"
import Tom from "../../images/tombg.png"

export default function Headline({ children, ...restProps }) {
    return (
        <HeadlineContainer restProps>

            <ImageContainer>
                <img src={Tom}/>
            </ImageContainer>

        </HeadlineContainer>
    )
}