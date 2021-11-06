import styled from "styled-components";

export const PortfolioContainer = styled.div`
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
export const PortfolioInner = styled.div`
@media(min-width: 1025px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin: 2rem auto 4rem auto;
    width: 100%;
}
`