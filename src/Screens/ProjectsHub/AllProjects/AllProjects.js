import React from 'react';
import ProjectsHero from './ProjectsHero/ProjectsHero';
import ProjectsList from './ProjectsList/ProjectsList';

function AllProjects() {
  return (
    <div style={{ background: '#fff' }}>
        <ProjectsHero />
        <ProjectsList />
    </div>
  )
}

export default AllProjects;