
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButton } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my Web App projects.
        </Desc>
        <ToggleButton active value="web app">WEB APP'S</ToggleButton>
        <CardContainer>
          {projects
            .filter((item) => item.category === 'web app')
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
