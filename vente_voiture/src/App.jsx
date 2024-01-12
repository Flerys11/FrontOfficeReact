// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './front/vendor/glightbox/css/glightbox.min.css';
import './front/vendor/nouislider/nouislider.min.css';
import './front/vendor/choices.js/public/assets/styles/choices.min.css';
import './front/vendor/swiper/swiper-bundle.min.css';
import './front/css/style.default.css';
import './front/css/custom.css';
import Header from './components/accueil/Header';
import Footer from './components/accueil/Footer';
import EnTete from './components/accueil/EnTete';
import AlaUne from './components/accueil/AlaUne';
import Contenu from './components/accueil/Contenu';


function App() {
  return (
    <div class="page-holder">
      <Header />
      <div className="container"> 
        <EnTete />
        <AlaUne />
        <section class="py-5">
          <header>
            <p class="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
          </header>
            <Contenu />
        </section>   
      </div>
      <Footer />
    </div>
  );
}

export default App;
