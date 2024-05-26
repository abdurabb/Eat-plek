import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './projectStyle'
import ProjectCard from './Cards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  console.log(openModal);
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Images</Title>
        <Desc>
        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout
        </Desc>
        {/* <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'static web app' ?
            <ToggleButton active value="static web app" onClick={() => setToggle('static web app')}>STATIC WEB APP 'S</ToggleButton>
            :
            <ToggleButton value="static web app" onClick={() => setToggle('static web app')}>STATIC WEB APP 'S</ToggleButton>
          }
          <Divider />
          {toggle === 'dynamic web app' ?
            <ToggleButton active value="dynamic web app" onClick={() => setToggle('dynamic web app')}>DYNAMIC WEB APP 'S</ToggleButton>
            :
            <ToggleButton value="dynamic web app" onClick={() => setToggle('dynamic web app')}>DYNAMIC WEB APP 'S</ToggleButton>
          }
          <Divider />
         
        </ToggleButtonGroup> */}
        <CardContainer className='mt-2'>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects