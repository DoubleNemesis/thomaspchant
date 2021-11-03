import styled from "styled-components";

const StyledMediaItem = styled.div`
background-color: #999;
padding: 1rem;
border: 1px solid black;
width: 100%;
border-radius: 5px;
margin-bottom: 1rem;

iframe{
    max-width: 100%;
}

`
const VideoTitle = styled.h2`
padding-top: 0;
margin-top: 0;
font-size: 1.1rem;
font-weight: 300;
`



export default function VlogItem(props) {
    return (
        <StyledMediaItem>
            <VideoTitle>{props.name}</VideoTitle>
            <iframe src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </StyledMediaItem>
    )
}