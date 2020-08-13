import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';

function GuestHomePage() {
  return (
    <div>
      <Header />
        <About />
      <Footer />
    </div>
  );
}

export default GuestHomePage;