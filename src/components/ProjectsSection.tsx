import { useState } from "react"
import Carousel from "./Carousel"
import { ProjectWrapper } from "./ui/projectsComponents"
import { Title } from "./ui/title"
import FilterMenu from "./FilterMenu"
import { ProjectsSectionProps } from "../type"

function ProjectsSection(props: ProjectsSectionProps) {
  const [filter, setFilter] = useState('all')
  const { projects } = props
  return (
    <ProjectWrapper>
      <Title $isVisible={true} $titleSize={1} $titleWeight={200} $titleColor="#FFC25C">
        Portifolio
      </Title>
      <Title $isVisible={true} $titleSize={1.5} $titleWeight={400} $titleColor="#E8E7E7">
        Meus Projetos
      </Title>
      <FilterMenu filter={filter} setFilter={setFilter} />
      <Carousel projects={projects} filter={filter} />
    </ProjectWrapper>
  )
}

export default ProjectsSection