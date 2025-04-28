import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GuidelinesList from './components/guidelines/GuidelinesList';
import { guidelines } from './data/guidelines';
import { ChevronUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Development Guidelines
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed">
              A comprehensive collection of best practices for writing clean, maintainable, and efficient code.
            </p>
          </div>
        </section>

        <GuidelinesList guidelines={guidelines} />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
          style={{
            opacity: showScrollTop ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;