import styled from 'styled-components'

export const SectionContainer = styled.section`
@media(min-width: 700px){
    width: 90%;
    margin: 0 auto;
}
@media(min-width: 1025px){
    display: ${({display})=>display || 'initial'};
    flex-direction: ${({flexDirection})=>flexDirection || 'unset'};
    justify-content: space-around;
}
`