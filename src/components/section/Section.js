import { SectionContainer } from './SectionComponents'


export default function Section({children, ...restProps}) {
    return (
        <SectionContainer 
        justifyContent={restProps.justifyContent}
        width={restProps.width}
        display={restProps.display}
        flexDirection={restProps.flexDirection}>
            {children}
        </SectionContainer>
    )
}