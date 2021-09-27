import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './components/contacts/contacts';
import Explore from './components/explore/explore';
import Footer from './components/footer/footer';
import Gallery from './components/gallery/gallery';
import Menu from './components/menu/menu';
import Outro from './components/outro/outro';
import Tickets from './components/tickets/tickets';
import Tour from './components/tour/tour';
import Video from './components/video/video';

import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Menu />
      <Tour />
      <Explore />
      <Video />
      <Gallery />
      <Tickets />
      <img src='/images/parallax.png' alt="gg" className="parallax"></img>
      <Contacts />
      <Footer />
      <Outro/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
