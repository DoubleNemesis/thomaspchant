import {FooterContainer, FooterSectionTop, FooterSectionBottom, FooterIcon} from './FooterComponents'
import Logo from './../../images/doveFinalG2.svg'
import Twitter from './../../images/twitter.svg'
import Youtube from './../../images/youtube.svg'
import Phone from './../../images/phone.svg'
import LinkedIn from './../../images/linkedin.svg'
import Email from './../../images/email.svg'
import GitHub from './../../images/github.svg'

const d = new Date()
const year = d.getFullYear()

export default function Footer(){
    return(
        <FooterContainer id="footer">
            <FooterSectionTop>
            <ul>
                    <li><FooterIcon src={Email}/><a href="mailto:info@thomaspchant.com">Email me</a></li>
                    <li><FooterIcon src={Twitter} className=""/><a href="https://www.twitter.com/tpchant">Follow me on twitter</a></li>
                    <li><FooterIcon src={Youtube}/><a href="https://www.twitter.com/tpchant">Watch my YouTube videos</a></li>
                    {/* <li><FooterIcon src={Phone}/><a href="tel:00000000">+44 0000 000000</a></li> */}
                    <li><FooterIcon src={GitHub}/><a href="https://github.com/DoubleNemesis">Check my GitHub</a></li>
                    <li><FooterIcon src={LinkedIn}/><a href="https://www.twitter.com/tpchant">Connect on LinkedIn</a></li>
                </ul>
            </FooterSectionTop>
            <FooterSectionBottom>
                <img src={Logo} alt="logo" className="footer-logo"/>
               <p>Copyright Thomas P Chant &copy;{year}</p>
            </FooterSectionBottom>            
        </FooterContainer>
    )
}