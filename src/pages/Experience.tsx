
import React from "react";
import { Separator } from "@/components/ui/separator";

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  location: string;
};

const ExperienceItem = ({ title, company, period, description, location }: ExperienceItemProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        <span className="text-sm text-muted-foreground mt-1 md:mt-0">{period}</span>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center text-foreground/70 mb-4">
        <span className="font-medium">{company}</span>
        <span className="hidden md:block mx-2">•</span>
        <span>{location}</span>
      </div>
      
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Designer",
      company: "Studio California",
      period: "2022 - Present",
      location: "Los Angeles, CA",
      description: "Lead designer for residential and commercial projects. Responsible for client relations, concept development, and project management. Specialized in sustainable design practices and innovative use of natural materials."
    },
    {
      title: "UX Architect",
      company: "Pacific Digital",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      description: "Designed user experiences for web and mobile applications. Conducted user research, created wireframes, prototypes, and worked closely with development teams to implement designs."
    },
    {
      title: "Junior Architect",
      company: "Modernist Associates",
      period: "2018 - 2020",
      location: "Santa Monica, CA",
      description: "Assisted senior architects in drafting plans, creating 3D models, and preparing presentation materials for client meetings. Participated in site visits and construction administration."
    }
  ];

  const education = [
    {
      title: "Master of Architecture",
      company: "California Institute of Design",
      period: "2016 - 2018",
      location: "Los Angeles, CA",
      description: "Focused on sustainable design and digital fabrication. Thesis project explored the intersection of technology and traditional building techniques."
    },
    {
      title: "Bachelor of Arts in Design Studies",
      company: "University of California",
      period: "2012 - 2016",
      location: "Berkeley, CA",
      description: "Multidisciplinary program combining elements of art, architecture, and digital media. Minor in Environmental Studies."
    }
  ];

  return (
    <main>
      <section className="section">
        <div className="container-custom">
          <h1 className="text-4xl font-light mb-16 tracking-tight">Experience</h1>
          
          <div>
            <h2 className="text-2xl font-light mb-8 text-cali-clay">Work Experience</h2>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
          
          <Separator className="my-16" />
          
          <div>
            <h2 className="text-2xl font-light mb-8 text-cali-clay">Education</h2>
            {education.map((edu, index) => (
              <ExperienceItem key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
