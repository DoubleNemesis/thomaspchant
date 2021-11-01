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
    line-height: 180%;
}

a, a:visited{
    text-decoration: underline;
    color: #666;
}

`

export const FooterSectionTop = styled.div`
    background-color: white;
    padding: 1rem;
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
    height: 16px;
    margin-right: .5rem;
    filter: invert(62%) sepia(90%) saturate(441%) hue-rotate(68deg) brightness(87%) contrast(98%);
`