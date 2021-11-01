import { useState } from "react";
import { HeaderContainer, HeaderLogo, BurgerMenu } from "./HeaderComponents";
import MobileNav from "./MobileNav";
import Logo from "../../images/doveFinalG2.svg"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <HeaderContainer>
            <HeaderLogo src={Logo}/>
            <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </HeaderContainer> 
    )
}