import Image from "next/image";
import Link from "next/link";
import HeroText from './HeroText';
import { Download, GraduationCap, University, MapPin, Heart, Github, Linkedin, Mail } from "lucide-react";
import { FaJava, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiPostgresql, SiKubernetes } from "react-icons/si";

const techStack = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
]

export default function Home() {
  return (
    <section className="bento-grid">

<div className="card info float">
  <div className="infoTop">
    <div className="profile">
      <Image src="/profile-img.jpg" fill alt="Diviyya Shree" className="profileImg"/>
    </div>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="infoButton">
  <Download size={16} className="infoDownload"/> Resume
</a>
  </div>
  <div className="profileContent">
    <p className="profileCard"><GraduationCap size={14} className="infoDownload"/> Graduate</p>
    <p className="profileCard"><University size={14} className="infoDownload"/> UCD</p>
    <p className="profileCard"><MapPin size={14} className="infoDownload"/> Ireland</p>
    <p className="profileCard"><Heart size={14} className="infoDownload"/> Reading</p>
  </div>
</div>

      <div className="card hero">
         <HeroText />
      </div>

      <div className="card tech float">
        <h2>Tech Stack</h2>
        <div className="techGrid">
          {techStack.map((tech) => (
            <div className="techItem" key={tech.name}>
              <div className="iconBox">
                <span className="dot topLeft"></span>
                <span className="dot topRight"></span>
                <span className="dot bottomLeft"></span>
                <span className="dot bottomRight"></span>
                <div className="icon">{tech.icon}</div>
              </div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card projects">
        <h2>Projects</h2>
    
        <Link href="/projects" className="bentoCta">View projects →</Link>
      </div>

      <div className="card exploring float">
        <h2>Currently Exploring</h2>
        <p>Distributed systems, Java backend development, microservices, and open-source workflows.</p>
      </div>

      <div className="card blog float">
        <h2>Blog</h2>
        <Link href="/blog" className="bentoCta">Read →</Link>
      </div>

      <div className="card socials">
        <h2>Socials</h2>
        <div className="socialLinks">
          <a href="https://github.com/DiviyyaShreeIyappan" target="_blank" rel="noopener noreferrer" className="socialLink">
            <Github size={16}/> GitHub
          </a>
          <a href="https://linkedin.com/in/diviyya-shree-iyappan-48786a214" target="_blank" rel="noopener noreferrer" className="socialLink">
            <Linkedin size={16}/> LinkedIn
          </a>
          <a href="mailto:diviyyashreei@gmail.com" className="socialLink">
            <Mail size={16}/> Email
          </a>
        </div>
      </div>

     

    </section>
  )
}