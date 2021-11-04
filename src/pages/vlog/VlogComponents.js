import styled from "styled-components";

export const VlogContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
width: 100%;
background-color: #222;
background-color: transparent;
padding: 0 1rem 0 1rem;
/* border-bottom: 1px solid white; */
overflow: hidden;



`
export const VlogInner = styled.div`
@media(min-width: 1025px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    width: 1025px;
}
`