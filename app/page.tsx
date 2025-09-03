import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import GitHubHeatmap from "@/components/sections/github-heatmap"
import CertificationsSection from "@/components/sections/certifications-section"
import EducationSection from "@/components/sections/education-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      {/* Top pill-shaped navbar */}
      <Navbar />

      {/* Sections ordered to match reference: Home, About, Skills, Projects, GitHub, Certifications, Education, Contact */}
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="github">
        <GitHubHeatmap />
      </div>

      <div id="certs">
        <CertificationsSection />
      </div>

      <div id="education">
        <EducationSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}
