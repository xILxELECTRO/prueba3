import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white-950 selection:bg-violet-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Demo />
      <Contact />
      <Footer />
      
    </main>
  );
}