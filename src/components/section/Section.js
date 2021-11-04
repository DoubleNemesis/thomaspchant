import { SectionContainer } from './SectionComponents'


export default function Section({children, ...restProps}) {
    return (
        <SectionContainer 
        display={restProps.display}
        flexDirection={restProps.flexDirection}>
            {children}
        </SectionContainer>
    )
}