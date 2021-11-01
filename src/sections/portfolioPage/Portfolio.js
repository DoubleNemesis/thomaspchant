import Main from '../../layout/main/Main'
import Section from '../../components/section/Section'
import data from '../../data/projectData'
import {PortfolioContainer} from './PortfolioComponents'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {

    const {projects} = data

    const projectsDisplay = projects.map((item)=>{
        return <PortfolioItem
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
                    {projectsDisplay}
                </PortfolioContainer>
            </Section>
        </Main>
    )
}