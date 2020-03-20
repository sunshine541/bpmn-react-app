/*
 * @Author: Fus
 * @Date:   2020-03-20 09:07:46
 * @Desc: bpmnjs demo
 */
import React, { Component } from 'react';
import bpmnjs from 'bpmn-js';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import customTranslate from './bpmnChineseTranslate/index.js'; // 国际化中文
import customPalette from './custom'; // 自定义节点
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
        propertiesPanelModule,
        customTranslate, //国际化中文
        customPalette, // 自定义节点
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
  addBpmnListener = () => {
    this.addModelerListener();
    this.addEventBusListener();
  }
  // 给modeler添加监听事件
  addModelerListener = () => {
    // 监听绘图更改
    // 保存为xml的api为：saveXML；保存为svg的api为：saveSVG；
    this.bpmnModeler.on('commandStack.changed', () => {
      this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
        // console.log('aaa new xml', xml);
        this.setState({ xmlContent: xml })
      });
    })
    // 事件列表 元素新增/
    const eventsArr = ['shape.added', 'shape.move.end', 'shape.removed', 'connect.end', 'connect.move']
    eventsArr.forEach(event => {
      this.bpmnModeler.on(event, (e) => {
        console.log('aaa add new shape', event, e);
        var elementRegistry = this.bpmnModeler.get('elementRegistry')
        var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
        console.log(shape)
      })
    })
  }
  // 监听element事件
  addEventBusListener() {
    const eventBus = this.bpmnModeler.get('eventBus') // 需要使用eventBus
    const eventTypes = ['element.click', 'element.changed'] // 需要监听的事件集合
    eventTypes.forEach((eventType) => {
      eventBus.on(eventType, (e) => {
        // 先避免点击空白画布也触发（bpmn:Process 为根目录）
        if (!e || e.element.type == 'bpmn:Process') return;
        console.log('aaa element event', eventType, e)
        if (eventType === 'element.changed') {
          this.handleEleChange(e);
        }
      })
    })
  }
  // 控件变化
  handleEleChange = (e) => {
    var shape = this.getShape(e.element.id)
    if (!shape) {
      // 若是shape为null则表示删除, 无论是shape还是connect删除都调用此处
      console.log('无效的shape')
      return;
    }
    // 由于上面已经用 shape.removed 检测了shape的删除, 因此这里只判断是否是线
    if (this.isSequenceFlow(shape.type)) {
      console.log('删除了线')
      return;
    }
    if (!this.isInvalid(shape.type)) {
      if (this.isSequenceFlow(shape.type)) {
        console.log('改变了线')
      }
    }
  }
  // 获取shape信息
  getShape(id) {
    var elementRegistry = this.bpmnModeler.get('elementRegistry')
    return elementRegistry.get(id)
  }
  // 判断是否是无效的值
  isInvalid(param) {
    return param === null || param === undefined || param === ''
  }
  // 判断是否是线
  isSequenceFlow(type) {
    return type === 'bpmn:SequenceFlow'
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
        <div className="btnWrap">
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
      </div>
    )
  }
}


export default BpmnTest;