import styled from "styled-components";

export const HeadlineImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    /* min-height: 400px; */
`

export const ImageContainer = styled.div`
    position: relative;
    height: 250px;
    width: 250px;
    margin-bottom: 0;
    clip-path: path(var(--blob));

    img{
        height: 250px;
        width: 250px;
    }
`

export const ImageLabel = styled.div`
/* border: 1px solid red; */
h2{
    margin: 0;
    padding: 0;
    font-size: .8rem;
    font-weight: 400;
    color: #999;
}

`