
import React from 'react';
import { Link } from 'react-router-dom';


// Importations des fichiers CSS
import './front/vendor/glightbox/css/glightbox.min.css';
import './front/vendor/nouislider/nouislider.min.css';
import './front/vendor/choices.js/public/assets/styles/choices.min.css';
import './front/vendor/swiper/swiper-bundle.min.css';
import './front/css/style.default.css';
import './front/css/custom.css';
import './front/chat/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/accueil/Header';
import Footer from './components/accueil/Footer';
import Page from './components/chat/Page';
import Cont from './components/chat/Cont';

const messages = [
    {
      time: '10:10 AM, Today',
      content: 'Hi Aiden, how are you? How is the project coming along?',
      sender: 'other',
    },
    {
      time: '10:12 AM, Today',
      content: 'Are we meeting today?',
      sender: 'me',
    },
    {
      time: '10:15 AM, Today',
      content: 'Project has been already finished and I have results to show you.',
      sender: 'me',
    },
  ];

function Chat() {
  return (
    <div class="page-holder">
      <Header />

      <div class="container">
        <div class="row clearfix">
            <div class="col-lg-12">
            <div className='col-lg-2'>
                <p>Chat</p>
            </div>
                <Page Cont={Cont} messages={messages} />
            </div>
         </div>
       </div>

      <Footer />
    </div>

    
  );
}

export default Chat;
