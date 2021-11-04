import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import data from '../../data/projectData'
import { PortfolioContainer, PortfolioInner } from './PortfolioComponents'
import PortfolioItem from './PortfolioItem'
import { TextBlock } from '../../components/blocks/TextBlock'
import { StyledH1 } from '../../components/text/StyledH1'

export default function Portfolio() {

    const { projects } = data

    const projectsDisplay = projects.map((item) => {
        return <PortfolioItem
            key={item.key}
            imageUrl={item.imageUrl}
            flipSideText={item.flipSideText}
            projectName={item.projectName}
            projectUrl={item.projectUrl}
            githubLink={item.githubLink}
            projectType={item.projectType}
        />
    })

    return (
        <Main>
            <Section>
                <PortfolioContainer>
                    <TextBlock>
                        <StyledH1>Projects</StyledH1>
                        <p>A selection of my recent work</p>
                    </TextBlock>
                    <PortfolioInner>
                        {projectsDisplay}
                    </PortfolioInner>
                </PortfolioContainer>
            </Section>
        </Main>
    )
}