// Bibliotecas em package.json
import React, { Component } from 'react';
import { render } from 'react-dom';

// Nossos componentes
import { Header } from 'components/Header';
import { Home } from 'components/Home';
import { Footer } from 'components/Footer';

render(
  <div>
    <Header />
    <Home />
    <Footer />
  </div>,
  document.getElementById('app')
);
