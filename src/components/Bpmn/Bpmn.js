import React, { Component } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import xml from './xml.js';
// 左侧工具栏样式
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' // 右边属性栏样式
import './style.css';

class BpmnTest extends Component {
  state = {
    xmlContent: '', // xml内容
    svgContent: '', // svg内容
  }
  componentDidMount() {
    const bpmnModeler = new BpmnModeler({
      container: '#canvas',
      propertiesPanel: {
        parent: '#panel'
      },
      additionalModules: [
        // 右边的属性栏
        propertiesProviderModule,
        propertiesPanelModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });
    this.bpmnModeler = bpmnModeler;
    bpmnModeler.importXML(xml, (err) => {
      if (err) {
        console.log(err, 'aaa err')
      } else {
        this.addBpmnListener();
      }
      // 让图能自适应屏幕
      var canvas = this.bpmnModeler.get('canvas')
      canvas.zoom('fit-viewport')
    })
  }
  // 添加绑定事件
  addBpmnListener = () => {
    console.log('aaa 创建成功!')
    // 给图绑定事件，当图有发生改变就会触发这个事件
    // 保存为xml的api为：saveXML；保存为svg的api为：saveSVG；
    this.bpmnModeler.on('commandStack.changed', () => {
      this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
        console.log('aaa new xml', xml);
        this.setState({ xmlContent: xml })
      });
    })
  }
  // 保存为svg文件
  saveAsSvg = (e) => {
    this.bpmnModeler.saveSVG({ format: true }, (err, svgContent) => {
      this.setState({ svgContent })
    })
  }
  // // 将xml或svg作为文件保存
  // setEncoded = (data, e) => {
  //   console.log(data, e, 'aaa')
  //   // 把xml转换为URI，下载要用到的
  //   const encodedData = encodeURIComponent(data)
  //   // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
  //   console.log(link, name, data)
  //   let xmlFile = new File([data], 'test.bpmn')
  //   console.log(xmlFile)
  //   if (data) {
  //     link.className = 'active'
  //     link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
  //     link.download = name
  //   }
  // }

  render() {
    const { xmlContent, svgContent } = this.state;
    return (
      <div className="container">
        <div id="canvas" className="canvas"></div>
        <div id="panel" className="panel"></div>
        <a
          className="saveBtn"
          href={`data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(xmlContent)}`}
          download='content.xml'
        >
          保存为bpmn文件
        </a>
        <a
          className="saveBtn"
          href={`data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(svgContent)}`}
          download='content.svg'
          onClick={this.saveAsSvg}>
          保存为svg文件
        </a>
      </div>
    )
  }
}

export default BpmnTest;