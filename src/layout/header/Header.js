import { HeaderContainer, HeaderLogo, BurgerMenu } from "./HeaderComponents";
import Logo from "../../images/doveFinalG2.svg"

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo src={Logo}/>
            <BurgerMenu/>
        </HeaderContainer>
    )
}