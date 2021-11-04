import styled from "styled-components"
import Bullet from "../../images/bullet.svg"

export const TextBlock = styled.div`
margin: 1rem 1rem 0 0rem;
font-size: var(--text);

ul{
    list-style-image: url(${Bullet});
    margin-left: 0px;
    padding-left: 1.3rem;
}

ol{
    margin-left: 0px;
}

li{
    margin-bottom: 1rem;
    margin-left: 0;
}


@media(min-width:700px){
    margin: 2rem 0 0 0;
}

`