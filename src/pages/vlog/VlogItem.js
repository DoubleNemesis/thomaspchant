import styled from "styled-components";

const StyledMediaItem = styled.div`
background-color: #fff;
padding: 1rem;
border: 1px solid black;
width: 100%;
border-radius: 5px;
margin-bottom: 1rem;

iframe{
    max-width: 100%;
}

@media(min-width:700px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    iframe{
    max-width: 50%;
}

}
`
const VideoTitle = styled.h2`
padding-top: 0;
margin-top: 0;
font-size: 1.1rem;
font-weight: 400;
text-align: center;
color: #141414;

@media(min-width:700px){
    margin: 0 2rem;
}

`

const VideoTextContainer = styled.div`
@media(min-width:700px){
    width: 50%;
}
`

const StyledPContainer = styled.div`
display: none;

@media(min-width: 700px){
    display: block;
    color: #141414;
    margin: 1rem 2rem;
    font-size: .8rem;
}


`



export default function VlogItem(props) {
    return (
        <StyledMediaItem>
            <VideoTextContainer>
                <VideoTitle>{props.name}</VideoTitle>
                <StyledPContainer>{props.teaser}</StyledPContainer>
            </VideoTextContainer>
            <iframe src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </StyledMediaItem>
    )
}