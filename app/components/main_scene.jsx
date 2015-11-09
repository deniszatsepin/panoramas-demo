/**
 * Created by Denis Zatsepin <denis@zatsepin.spb.ru>.
 */

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ReactTHREE from 'react-three';

import ClickableCube from './view_point.jsx';

const Scene = ReactTHREE.Scene;
const PerspectiveCamera = ReactTHREE.PerspectiveCamera;
const AmbientLight = ReactTHREE.AmbientLight;
const DirectionalLight = ReactTHREE.DirectionalLight;

var MainScene = React.createClass({
  displayName: 'MainScene',
  render: function() {
    const initialQ = new THREE.Quaternion();
    const width = window.innerWidth - 6;
    const height = window.innerHeight - 6;

    var sceneProps = {
      width: width,
      height: height,
      quaternion: initialQ,
      camera: 'maincamera',
      pointerEvents: ['onClick', 'onMouseMove']
    };

    var aspectRatio = width / height;

    var cameraProps = {
      fov: 75,
      aspect: aspectRatio,
      near: 1,
      far: 10000,
      position: new THREE.Vector3(0, 100, 600),
      lookat: new THREE.Vector3(0, 0, 0)
    };

    var ambientLightProps = {
      color: new THREE.Color(0x333333),
      intencity: 0.8,
      target: new THREE.Vector3(0, 0, 0)
    };

    const directionalLightProps = {
      color: new THREE.Color(0xffffff),
      intencity: 1.5,
      position: new THREE.Vector3(0, 0, 60)
    };

    var cubeProps = {
      position: new THREE.Vector3(50, 30, 10)
    };

    function getPoint() {
      const sign = Math.random() * 2 > 1 ? 1 : -1;
      return Math.floor(Math.random() * 200) * sign;
    }

    return  <Scene {...sceneProps}>
              {_.map(_.range(1, 4), function(id) {
                let x = getPoint();
                let y = getPoint();
                let z = getPoint();
                console.log(x, y, z);
                var pos = new THREE.Vector3(x, y, z);
                return <ClickableCube position={pos} id={id} key={id} />
              })}
              <PerspectiveCamera name="maincamera" {...cameraProps} />
              <AmbientLight {...ambientLightProps} />
              <DirectionalLight {...directionalLightProps} />
            </Scene>;
  }
});

export default MainScene;
