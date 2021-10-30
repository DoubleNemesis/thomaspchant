import styled from "styled-components";

const StyledButton = styled.button`
border: none;
background-color: limegreen;
margin: 1rem;
padding: .8rem 2rem;
color: white;
font-size: 1.3rem;
font-weight: 600;
text-transform: uppercase;
`


export default function MainButton({children, ...restProps}){
    return <StyledButton restProps>{children}</StyledButton>
}