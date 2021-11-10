import styled from "styled-components";

export const MobileNavContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
background-color: #222;
background-image: linear-gradient(rgb(33, 37, 41), rgb(51, 51, 51));
border-bottom: 1px solid white;
top: 0;
left: 0;
transform: translateX(${({isMenuOpen})=> isMenuOpen ? '0' : '100%'});
z-index: ${({isMenuOpen})=> isMenuOpen ? 2 : 0};
transition: transform .6s;
overflow: ${({isMenuOpen})=> isMenuOpen ? 'unset' : 'hidden'};

.mobile-header{
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 1rem 0 1rem;
}

@media(min-width:700px){
    .mobile-header{
    padding: 1.3rem 1rem 0 1rem;
}
}

ul{
    /* list-style: none; */
    color: white;
}

li{
    margin-bottom: 1.3rem;
}

a {
    color: white;
    font-size: 1.3rem;
}

@media(min-width:1025px){
    display: none;
}

`