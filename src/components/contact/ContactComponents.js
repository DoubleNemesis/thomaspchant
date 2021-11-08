import styled from "styled-components";

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
border-top: 2px solid white;
background-color: #28a428;


h2{
    text-align: center;
    margin: .5rem 1rem 2rem 1rem;
}

p{
    padding: 0 1rem;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 75%;
gap: .5rem;

@media(min-width: 1025px){
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
background-color: rgb(33, 37, 41);
padding: .8rem 1.8rem;
color: white;
margin-top: .5rem; 
font-size: 1.3rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 0px;
cursor: pointer;
width: 200px;
border-radius: 5px;

:hover{
    background-color: #666;
}

`
