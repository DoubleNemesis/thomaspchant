import styled from "styled-components";

export const TextContainer = styled.div`
color: white;
width: 90%;
text-align: left;
margin: 1rem;
background-color: #333;
border-radius: 10px;
font-size: 1.2rem;
display:none;

p{
    margin: 0;
    padding: 1rem;
}
@media(min-width:700px){
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 0 0;
    border-radius: 0px;
    width: 100%;
}
@media(min-width:1025px){
    width: 40%;
    margin: 2rem;
    border-radius: 30px;
    
    p{
    margin: 0 3rem;
    padding: 0;
    }
    
    }
`