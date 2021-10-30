import { SectionContainer } from './SectionComponents'


export default function Section({children, ...restProps}) {
    return (
        <SectionContainer restProps>
            {children}
        </SectionContainer>
    )
}