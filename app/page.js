import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Achievements from "./components/homepage/achievements";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { Analytics } from "@vercel/analytics/react"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <ContactSection />
      <Analytics />
    </>
  );
}
