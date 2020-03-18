import React, { Component } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import xml from './xml.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import './style.css';

class BpmnTest extends Component {
  componentDidMount() {
    const modeler = new BpmnModeler({
      container: '#canvas',
    });
    modeler.importXML(xml, (err) => {
      console.log(err, 'aaa err')
    })
  }
  render() {
    return (
      <div className="container">
        <div id="canvas" className="canvas"></div>
        <div className="panel"></div>
      </div>
    )
  }
}

export default BpmnTest;