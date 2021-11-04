import styled from "styled-components";

export const FirstSectionContainer = styled.div`
background-color: white;
margin-top: 0rem;
padding: 1.5rem 1rem 1rem 1rem;

h1, h2, p {
    color: dimgrey;
}

ol{
    font-size: var(--textSmall);
    color: dimgray;
}

p{
    font-size: var(--textSmall);
}

a:hover{
    color: limegreen;
}

@media(min-width:700px){
    padding: 3rem 2rem 2rem 2rem;
    border-radius: 5px;
}
@media(min-width:1025px){
    padding: 3rem 27vw 2rem 27vw;
    border-radius: 0px;
}
`