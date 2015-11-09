import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ReactTHREE from 'react-three';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import MainScene from './components/main_scene.jsx';
import Panoramas from './panoramas/panoramas.jsx';

function createContainer() {
  var container = document.createElement('div');
  container.className = 'scene-container';
  document.body.appendChild(container);
  return container;
}

const history = createBrowserHistory();

ReactTHREE.render((
  <Router history={history}>
    <Route path="/" component={MainScene} />
    <Route path="/panoramas/:panoramaId" component={Panoramas} />
  </Router>
), createContainer());
