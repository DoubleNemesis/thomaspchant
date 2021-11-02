import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import data from '../../data/vlogData'
import {VlogContainer} from './VlogComponents'
import VlogItem from './VlogItem'
import { TextBlock } from '../../components/blocks/TextBlock'
import { StyledH1 } from '../../components/text/StyledH1'

export default function Vlog() {

    const {entries} = data
    console.log(entries);
    console.log(data);

    const entriesDisplay = entries.map((item)=>{
        const srcURL = `https://www.youtube.com/embed/${item.embedCode}`
        return <VlogItem
        key={item.key}
        name={item.name}
        type={item.type}
        src={srcURL}
        teaser={item.teaser}    
        />
    })

    return (
        <Main>
            <Section>
                <VlogContainer>
                    <TextBlock>
                        <StyledH1>Videos</StyledH1>
                        <p>A selection of coding walkthroughs</p>
                    </TextBlock>
                    {entriesDisplay}
                </VlogContainer>
            </Section>
        </Main>
    )
}