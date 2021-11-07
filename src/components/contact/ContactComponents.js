import styled from "styled-components";

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
border-top: 2px solid white;


h2{
    text-align: center;
    margin: .5rem 1rem 2rem 1rem;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 75%;
gap: .5rem;

@media(min-width: 700px){
    width: 700px;
}

textarea{
    height: 100px;
}

label{
    color: white;
    font-size: 110%;
}

input{
    line-height: 2rem;
}
`

export const FormButton = styled.button`
border: none;
background-color: limegreen;
padding: .8rem 1.8rem;
color: white;
margin-top: .5rem; 
font-size: 1.3rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 0px;
cursor: pointer;

:hover{
    background-color: #80cd32;
}

`
