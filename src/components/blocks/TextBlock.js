import styled from "styled-components"
import Bullet from "../../images/bullet.svg"

export const TextBlock = styled.div`
margin: 1rem 1rem 0 0rem;
font-size: var(--text);

ul{
    list-style-image: url(${Bullet});
}

ol{
    margin-left: 0px;
}

li{
    margin-bottom: 1rem;
}

`