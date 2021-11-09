import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 317px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: white;
border: 1px solid #999;
border-radius: .2em;
margin: 1em;
padding: 1.5em .5em .5em .5em;

@media(min-width: 700px){
    width: 500px;
}



.flip-box {
    background-color: transparent;
    width: 317px;
    height: 150px;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    padding-top: 3px;
    user-select: none;
  }

  @media(min-width: 700px){

    .flip-box {
    width: 500px;
    height: 240px;
  }
}
  
  .flip-box-inner {
    position: relative;
    width: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

@media(max-width:1025px){
  .flip-box:hover .flip-box-inner {
    transform: unset;
  }

  .flip-box:active .flip-box-inner {
    transform: rotateY(180deg);
  }
}
  
  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    
  }
  
  .flip-box-front {
    color: black;
  }
  
  .flip-box-back {
    color: black;
    transform: rotateY(180deg);
  }
`

const ProjectText = styled.div`
width: 94%;
/* background-color: whitesmoke; */

.projectTextInner{
    font-size: 1.2em;
    padding: .2em .9em .2em .2em;
    display: flex;
    justify-content: space-between;
}

.projectTextInner:first-child{
    padding-top: .6em;
}

.projectTextInner:last-child{
    padding: 3px 0 1em .2em;
    color: #333;
    font-size: .9em;
}

.projectTextInner a {
    text-decoration: none;
    color: limegreen;
}

.projectTextInner a:hover {
    text-decoration: underline;
}

a i {
  color: limegreen;
}

`
const ProjectImage = styled.div`
z-index:1;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
    max-width: 297px;
}

  @media(min-width: 700px){

img{
    max-width: 457px;
  }
  }

img.hidden{
    opacity: 0;
    transition: opacity .5s ease 0s;
  }

img.shown{
    opacity: 1;
    transition: opacity .5s ease 0s;
  }

`
const FlipSideText = styled.div`
position:absolute;
z-index: 0;
padding: 1em 2em;
text-align: left;

`
function PortfolioItem(props) {

  return (
    <>
      <Container >
        <div className="flip-box" aria-haspopup="true">
          <div className="flip-box-inner" >
            <div className="flip-box-front" >
              <ProjectImage><img src={props.imageUrl} alt={props.projectName} /></ProjectImage>
            </div>
            <div className="flip-box-back">
              <FlipSideText>{props.flipSideText}</FlipSideText>
            </div>
          </div>
        </div>
        <ProjectText>
          <div className="projectTextInner"><a href={props.projectUrl}>{props.projectName}</a>
            {props.githubLink ? <a href={props.githubLink}><i className="fab fa-github" aria-label="guthub link" /></a> : null}
          </div>
          <div className="projectTextInner">{props.projectType}</div>
        </ProjectText>
      </Container>
    </>
  )
}

export default PortfolioItem