import styled from "styled-components";

export const DesktopNavContainer = styled.div`
display: none;

@media(min-width:1025px){
    display: flex;
    
    li{
        position: relative;
        display: inline;
        margin: 1rem;
    }
    
    li:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: limegreen;
      transform-origin: bottom left;
      transition: transform 0.25s ease-out;
    }
    
    li:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    
    a{
        color: white;
        text-decoration: none;
        font-size: var(--menu);
    }
}

`