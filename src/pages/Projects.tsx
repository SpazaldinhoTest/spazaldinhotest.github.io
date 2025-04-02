
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, link, year }: { 
  title: string, 
  description: string, 
  link?: string,
  year: string 
}) => {
  return (
    <Card className="cali-card">
      <CardContent className="p-0">
        <div className="h-48 bg-cali-sand"></div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-medium tracking-tight">{title}</h3>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          <p className="text-foreground/70 mb-4">{description}</p>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-cali-clay hover:text-cali-clay/80 font-medium text-sm"
            >
              View Project <ArrowUpRight size={14} className="ml-1" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Coastal Residence",
      description: "A minimalist beach house designed with sustainable materials and panoramic ocean views.",
      year: "2023",
      link: "#"
    },
    {
      title: "Urban Gallery Space",
      description: "Renovation of a historic building into a contemporary art gallery with flexible exhibition areas.",
      year: "2022",
      link: "#"
    },
    {
      title: "Digital Experience Platform",
      description: "A web application that connects designers with clients through an intuitive portfolio system.",
      year: "2021",
      link: "#"
    },
    {
      title: "Desert Retreat",
      description: "A modern interpretation of mid-century design principles adapted for the harsh desert climate.",
      year: "2020",
      link: "#"
    }
  ];

  return (
    <main>
      <section className="section">
        <div className="container-custom">
          <h1 className="text-4xl font-light mb-16 tracking-tight">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
