import React from 'react';
import TopBar from './components/Common/Header/Top-Bar/TopBar.js'
import Navbar from './components/Common/Header/Navigation/Navbar.js'
import HeaderSlider from './components/Common/Header/Slider/HeaderSlider'
import VehicleSearch from './components/Vehicle/Vehicle-Search/VehicleSearch.js';
import Advantages from './components/Home/Advantages/Advantages.js';
import Services from './components/Vehicle/Vehicle-Search/VehicleSearch.js';
import VehicleOffers from './components/Vehicle/Vehicle-Offers/VehicleOffers.js';
import Footer from './components/Common/Footer/Footer.js';
import Brands from './components/Home/Brands/Brands.js';
import VehicleTypes from './components/Vehicle/Vehicle-Types/VehicleTypes';
import About from './components/Home/About/About.js';
import ContactForm from './components/Forms/Contact/ContactForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar></TopBar>
        <Navbar></Navbar>
        <HeaderSlider></HeaderSlider>
      </header>

      <main className='App-main'>
        <VehicleSearch></VehicleSearch>
        <Advantages> </Advantages>
        <Services> </Services>
        <VehicleOffers></VehicleOffers>
        <VehicleTypes></VehicleTypes>
        <ContactForm></ContactForm>
        <About></About>
        <Brands></Brands>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;