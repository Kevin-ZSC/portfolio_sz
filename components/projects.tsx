"use client";

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import Project from './project';
import SectionHeader from './sectionHeader';

export default function Projects() {
  const { ref } = useSectionInView("Projects",0.5)
 

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader>My projects</SectionHeader>
      <div>
        { 
          projectsData.map((project,index)=>(
            <React.Fragment key={index}>
              <Project {...project} 
              onClick={() => window.open(project.projectUrl, "_blank") }
              />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

