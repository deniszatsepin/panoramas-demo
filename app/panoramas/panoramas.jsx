import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ReactTHREE from 'react-three';


var Panoramas = React.createClass({
  displayName: 'Panoramas',
  componentDidMount: function() {

  },
  render: function () {
    return <div>panorama {this.props.params.panoramaId}</div>
  }
});

export default Panoramas;