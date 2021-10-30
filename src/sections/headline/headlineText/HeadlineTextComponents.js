import styled from "styled-components"
import Bullet from "../../../images/bullet.svg"

export const HeadlineTextContainer = styled.div`

`

export const HeadlineBig = styled.h1`
margin: 1rem 1rem 0 1rem;
font-size: var(--headline);
`
export const TextBlock = styled.p`
margin: 1rem 1rem 0 1rem;
font-size: var(--text);

ul{
    list-style-image: url(${Bullet});
}

li{
    margin-bottom: 1rem;
}

`