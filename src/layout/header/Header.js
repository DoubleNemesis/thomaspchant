import { useState, useEffect, useCallback } from "react";
import { HeaderContainer, HeaderLogo, BurgerMenu } from "./HeaderComponents";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Logo from "../../images/doveFinalG2.svg"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    })

    const closeMenu = useCallback(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    }, [isMenuOpen])

    return (
        <header>
            <HeaderContainer isMenuOpen={isMenuOpen}>
            <Link to="/"><HeaderLogo src={Logo} /></Link>
                <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </HeaderContainer>
            <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
    )
}