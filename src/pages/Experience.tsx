import React from "react";
import { Separator } from "@/components/ui/separator";

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string; // a short overview
};

const ExperienceItem = ({
  title,
  company,
  period,
  location,
  description,
}: ExperienceItemProps) => {
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

// Work Experience (concise!)
const experiences: ExperienceItemProps[] = [
  {
    title: "Software Engineer Co-op",
    company: "Ericsson",
    period: "Jan 2025 – Present",
    location: "Ottawa, ON",
    description:
      "Develop machine learning solutions to analyze memory usage and build DevOps tools for smoother firmware integration."
  },
  {
    title: "Federated Learning Research Co-op",
    company: "Queen’s University",
    period: "May 2024 – Aug 2024",
    location: "Kingston, ON",
    description:
      "Researched trust-based learning methods in distributed environments and refined approaches for federated data training."
  },
  {
    title: "Teaching Assistant (CISC 221, Computer Architecture)",
    company: "Queen’s University",
    period: "Jan 2024 – Apr 2024",
    location: "Kingston, ON",
    description:
      "Guided labs, graded assignments, and supported students in digital logic and assembly fundamentals."
  },
  {
    title: "Teaching Assistant (CISC 102, Discrete Math I)",
    company: "Queen’s University",
    period: "Sept 2023 – Dec 2023",
    location: "Kingston, ON",
    description:
      "Introduced discrete math concepts, handled grading, and offered weekly sessions to reinforce foundational theory."
  },
  {
    title: "Software Engineer Co-op",
    company: "Scotiabank",
    period: "May 2023 – Aug 2023",
    location: "Toronto, ON",
    description:
      "Developed a consent enforcement system to simplify account access. Created Spring-based solutions to boost scalability and user responsiveness."
  },
  {
    title: "Data Organization Intern",
    company: "Sprackman Terrence LLP",
    period: "June 2022 – Sept 2022",
    location: "Toronto, ON",
    description:
      "Transitioned operations to a paperless model, streamlined archiving, and automated administrative tasks."
  },
  {
    title: "Automation Research Intern",
    company: "Queen’s University",
    period: "June 2021 – Sept 2021",
    location: "Kingston, ON",
    description:
      "Researched data to refine dependency configurations and helped develop automation tools for software maintenance."
  }
];

// Education (unchanged, or simplified as you like)
const education: ExperienceItemProps[] = [
  {
    title: "Honour's Bachelor of Computing",
    company: "Queen's University",
    period: "2022 - 2027",
    location: "Kingston, Ontario",
    description:
      "Specialization in Artificial Intelligence. Coursework includes Software Engineering, Computer Architecture, Data Structures & Algorithms, and Operating Systems."
  }
];

// Extracurriculars (concise as well)
const extracurriculars: ExperienceItemProps[] = [
  {
    title: "Computer Vision Project Manager",
    company: "QMind",
    period: "Sept 2023 – Present",
    location: "Kingston, ON",
    description:
      "Led a team creating real-time facial recognition solutions and explored image-to-text generation for AI research."
  },
  {
    title: "Perception Development Researcher",
    company: "Queen’s AutoDrive",
    period: "Sept 2023 – Present",
    location: "Kingston, ON",
    description:
      "Developed traffic-light detection algorithms for a self-driving car and advanced computer-vision workflows."
  },
  {
    title: "Control Systems Engineer",
    company: "Queen’s Hyperloop",
    period: "Sept 2023 – Sept 2024",
    location: "Kingston, ON",
    description:
      "Created electrical and control systems for an autonomous tunneling machine, optimizing reliability and throughput."
  }
];

const Experience = () => {
  return (
    <main>
      <section className="section">
        <div className="container-custom">
          {/* Work Experience */}
          <h1 className="text-4xl font-light mb-16 tracking-tight">Experience</h1>
          <div>
            <h2 className="text-2xl font-light mb-8 text-cali-clay">Work Experience</h2>
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </div>

          <Separator className="my-16" />

          {/* Education */}
          <div>
            <h2 className="text-2xl font-light mb-8 text-cali-clay">Education</h2>
            {education.map((edu, i) => (
              <ExperienceItem key={i} {...edu} />
            ))}
          </div>

          <Separator className="my-16" />

          {/* Extracurriculars */}
          <div>
            <h2 className="text-2xl font-light mb-8 text-cali-clay">Extracurriculars</h2>
            {extracurriculars.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
