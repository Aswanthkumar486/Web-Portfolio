import React from 'react';
import data from '../data/data.json';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Testminols from '@/components/Testminols';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home({ navbar,footerData, developer,skillsData,projectData,contactData,educationData,certificates,testdata,expData }) {
  return (
    <div>
      <Navbar data={navbar} developer={developer} />
      <Hero data={developer} />
      <Education data={educationData} />
      <Experience data={expData} />
      <Projects data={projectData} />
      <Certifications data={certificates} />
      <Skills data={skillsData} />
      <Testminols data={testdata} />
      <Contact data={contactData} />
      <Footer data={footerData} />
      {/* Add more sections like Hero, About, Projects here */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navbar: data.navbar || [],
      developer: data.developer,
      skillsData:data.skills || [],
      educationData:data.education,
      projectData:data.projects,
      certificates:data.certifications,
      testdata:data.testimonials,
      expData:data.experience,
      contactData:data.contact,
      footerData:data.footer
    }
  };
}
