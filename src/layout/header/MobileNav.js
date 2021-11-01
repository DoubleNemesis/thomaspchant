import { Link } from "react-router-dom";
import { MobileNavContainer } from "./MobileNavComponents";
import { HeaderLogo } from "./HeaderComponents";
import Logo from "../../images/doveFinalG2.svg"
import { BurgerMenu } from "./HeaderComponents";

export default function MobileNav(props) {
    return (
        <MobileNavContainer isMenuOpen={props.isMenuOpen}>
            <div className="mobile-header">
        <HeaderLogo src={Logo}/>
        <BurgerMenu isMenuOpen={props.isMenuOpen} setIsMenuOpen={props.setIsMenuOpen} />
            </div>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/portfolio">Projects</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
        </MobileNavContainer>
    )
}