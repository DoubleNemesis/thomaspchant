import styled from "styled-components";

export const FooterContainer = styled.div`

color: #141414;

ul{
    list-style: none;
    padding-left: 1rem;
}

ul, li, img{
    vertical-align: middle;
}

li{
    line-height: 200%;
}

a, a:visited{
    text-decoration: underline;
    color: white;
}

@media(min-width: 700px){
    width: 90%;
    margin: 0 auto;
}

`
export const FooterSectionTop = styled.div`
    background-color: limegreen;
    padding: 1rem;
    border-radius: 5px;
    `
export const FooterSectionBottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;

    p{
        font-size: .7rem;
    }

    img.footer-logo{
    width: 80px;     
    }
`
export const FooterIcon = styled.img`
    height: 25px;
    margin-right: .8rem;
    filter: invert(62%) sepia(90%) saturate(441%) hue-rotate(68deg) brightness(87%) contrast(98%);
    filter: invert(93%) sepia(93%) saturate(28%) hue-rotate(115deg) brightness(106%) contrast(109%);
`