import React, { Component, ComponentElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./Peliculas_nuevas";

const contenido = (
  <div>
    <h1>Título</h1>
    <h2>otra cosa</h2>
  </div>
);

function Componente({titulo, children}: any){
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
}
ReactDOM.render(
    <App />
    ,document.getElementById('root')
);


