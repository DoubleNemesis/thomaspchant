import styled from "styled-components";

const StyledButton = styled.button`
border: none;
background-color: limegreen;
margin: 3rem 1rem;
padding: .8rem 1.8rem;
color: white;
font-size: 1.3rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 5px;
cursor: pointer;

:hover{
    background-color: #80cd32;
}

`

export default function MainButton({children, ...restProps}){
    return <StyledButton restProps onClick={restProps.onclick}>{children}</StyledButton>
}