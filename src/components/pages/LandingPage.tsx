import React from 'react';
import Header from '../layout/Header';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Footer from '../layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;