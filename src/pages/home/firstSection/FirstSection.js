import { FirstSectionContainer } from "./FirstSectionComponents"
import { TextBlock } from "../../../components/blocks/TextBlock"
import { StyledH1 } from "../../../components/text/StyledH1"

export default function FirstSection(){
    return (
        <FirstSectionContainer>
            <StyledH1>Nine Ways a Web Developer Can Help You:</StyledH1>
            <TextBlock>
                <ol>
                    <li>You’re starting a greenfield project from zero and need a developer who can work either independently or with your team to take the project through to completion.</li>
                    <li>You already have a great design for your site but need a developer to turn it into reality. </li>
                    <li>You’re using WordPress and need to add functionality that just isn’t available from an off-the-shelf-plugin.</li>
                    <li>You’re using WordPress and your theme needs to be tweaked to get it looking exactly the way you want it to.</li>
                    <li>Your site looks great, but not on mobiles and tablets! Or perhaps it looks great on phones but not on desktops.</li>
                    <li>You want to start an eCommerce business or improve the way your website handles sales or physical or digital goods.</li>
                    <li>You’re unhappy with your search engine rankings and want your site to perform better.   </li>
                    <li>You’d like to incorporate advertising or affiliate marketing into your site.</li>
                    <li>You need a copywriter who understands Search Engine Optimisation (SEO) and who can create copy that converts your visitors to customers. </li>
                </ol>
            </TextBlock>
            <TextBlock>
                <p>Ready for to <a href="mailto:info@thomaspchant.com">start a conversation?</a></p>
            </TextBlock>

        </FirstSectionContainer>
    )
}