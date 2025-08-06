import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <Hero />
      <ProjectList />
      <Footer />
    </div>
  );
}
