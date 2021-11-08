import styled from "styled-components"

export const ContactImageContainer = styled.div`
    position: relative;
    display: flex;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    @media(min-width:1025px){
        display: ${({display})=>display || 'flex'};
    }
`

export const ImageContainer = styled.div`
    position: relative;
    height: 250px;
    width: 250px;
    margin-bottom: 0;
    clip-path: path(var(--blob));
    z-index: -1; // is this needed?

    img{
        height: 250px;
        width: 250px;
    }

    /* @media(min-width: 700px){
    height: 400px;
    width: 400px;
    clip-path: path(var(--blobDesktop));

    img{
        height: 400px;
        width: 400px;
    }
    } */
`