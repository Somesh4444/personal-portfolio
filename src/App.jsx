import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiChat from './components/AiChat';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkeletonLoader from './components/SkeletonLoader';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulates initial hydration / asset warmup (just like YouTube/Instagram)
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setLoading(false), 900); // 900ms smooth reveal
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-brandDark1 text-brandText font-satoshi min-h-screen selection:bg-brandYellow selection:text-black animate-in fade-in duration-500">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <AiChat />
        <TechMarquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}