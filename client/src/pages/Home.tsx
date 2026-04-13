import Header from "@/components/Header";
import ProfilePhoto from "@/components/ProfilePhoto";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProfilePhoto />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
