
import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
background-color: #222;
background-color: transparent;
padding: 0 1rem 0 1rem;
border-bottom: 1px solid white;
overflow: hidden;

@media(min-width:700px){
    border-bottom: none;
    height: 6.5rem;
    /* border: 1px solid white; */
}
`

export const HeaderLogo = styled.img`
@media(min-width:700px){
    width: 200px;
}
`
const BurgerMenuContainer = styled.div`

@media(min-width:1025px){
    display: none;
}

`

export const BurgerMenu = (props) => {
    return (
        <BurgerMenuContainer onClick={()=>props.setIsMenuOpen(!props.isMenuOpen)} id="mobile-nav">
            <svg viewBox="0 0 120 60" width="40" height="60" fill="white">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        </BurgerMenuContainer>
    )

}
