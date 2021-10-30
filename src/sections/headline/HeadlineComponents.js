import styled from "styled-components";

export const HeadlineContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
`

export const ImageContainer = styled.div`
    position: relative;
    height: 250px;
    width: 250px;
    background: hotpink;
    clip-path: path(var(--blob));

    img{
        height: 250px;
        width: 250px;
    }

`