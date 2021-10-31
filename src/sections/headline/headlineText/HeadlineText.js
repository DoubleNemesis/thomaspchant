import {HeadlineBig, HeadlineTextContainer} from './HeadlineTextComponents'
import {TextBlock} from '../../../components/blocks/TextBlock'
import MainButton from '../../../components/buttons/MainButton'
import {ButtonContainer} from '../../../components/buttons/ButtonContainer'

export default function HeadlineText(){
    return(
        <HeadlineTextContainer>
        <HeadlineBig>
            Looking for a freelance web developer?
        </HeadlineBig>
        <TextBlock>
            Are you:
            <ul>
                <li>Starting a brand new project for your charity, business or society?</li>
                <li>Maintaining/updating an existing website or looking to add functionality?</li>
                <li>In need of a full-blown web application to wow your visitors?</li>
                <li>Wanting to increase visitor interaction or improve search engine ranking?</li>
            </ul>
            If any of that sounds like you, let's have a chat and get the ball rolling.
        </TextBlock>
        <ButtonContainer>
            <MainButton>Contact Me Now</MainButton>
        </ButtonContainer>
        </HeadlineTextContainer>
    )
}