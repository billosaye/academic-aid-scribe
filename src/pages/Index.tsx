
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import QualityAssurance from '../components/QualityAssurance';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Expertise from '../components/Expertise';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <QualityAssurance />
      <Pricing />
      <Testimonials />
      <Expertise />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
