import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
background-color: #222;
background-color: transparent;
padding: 0 1rem 0 1rem;
border-bottom: 1px solid white;
`

export const HeaderLogo = styled.img`
font-family: 'Rubik';
font-weight: 600;
font-size: 2.2rem;
padding: 0;
margin: 0;
`

export const BurgerMenu = () => {
    return (
        <div>
            <svg viewBox="0 0 120 60" width="40" height="60" fill="white">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        </div>
    )

}
