/**
 * Created by Denis Zatsepin <denis@zatsepin.spb.ru>.
 */
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ReactTHREE from 'react-three';
import { History } from 'react-router';

const Mesh = ReactTHREE.Mesh;

var ClickableCube = React.createClass({
  displayName: 'ClickableCube',
  mixins: [ History ],
  render: function() {
    const cubeProps = {
      material: new THREE.MeshPhongMaterial( { color: 0xdd0000, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ),
      geometry: new THREE.BoxGeometry( 30, 30, 30),
      onClick3D: function() {
        console.log('clicked', this);
        this.history.pushState(null, `/panoramas/${this.props.id}`);
      }.bind(this),
      onMouseMove3D: function() {
        console.log('move');
      }
    };

    _.assign(cubeProps, this.props);

    return <Mesh {...cubeProps} />
  }
});

export default ClickableCube;
