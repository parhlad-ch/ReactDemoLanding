import React from 'react';
import './App.css';

import Navbaar from './component/Navbaar';
import Banner from './component/Banner';
import Service from './component/Service';
import ContactUs from './component/ContactUs';
import DevelopmentService from './component/DevelopmentService';
import ProcessService from './component/ProcessService';
import ServicesTechnology from './component/ServicesTechnology';
import Contact from './component/Contact';
import Footer from './component/Footer';







function App() {
  return (

    <div className="page-wrapper">
      <Navbaar />
      <Banner />
      <Service />
      <ProcessService />
      <ContactUs />
      <DevelopmentService />
      <ServicesTechnology />
      <Contact />
      <Footer />
    </div>


  );
}

export default App;