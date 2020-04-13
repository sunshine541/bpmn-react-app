/*
 * @Author: Fus
 * @Date:   2020-04-13 14:01:28
 * @Desc: 测试用
 */
import React, { Component } from 'react';
// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
// import { xmlStr } from '../../mock/xmlStr'
import xml from '../Bpmn/xml.js';

// import customModule from './custom/ImportJS/onlyPalette'

class ReStart extends Component {
  componentDidMount() {
    this.init();
  }
  init = () => {
    // 建模
    this.bpmnModeler = new BpmnModeler({
      container: '#canvas',
      //添加控制板
      propertiesPanel: {
        parent: '#js-properties-panel'
      },
      additionalModules: [
        // 右侧的属性栏
        propertiesProviderModule,
        // customModule
      ]
    })
    this.createNewDiagram()
  }
  createNewDiagram = () => {
    this.success()
    // 将字符串转换成图显示出来
    this.bpmnModeler.importXML(xml, (err) => {
      if (err) {
        // console.error(err)
      }
      else {
        // 这里是成功之后的回调, 可以在这里做一系列事情
        this.success()
      }
    })
  }
  success = () => {
    console.log('创建成功!')
    this.addBpmnListener()
  }
  addBpmnListener = () => {
    const that = this
    // 获取a标签dom节点
    const downloadLink = this.refs.saveDiagram
    console.log(downloadLink, 'aaa downloadLink')
    // 给图绑定事件，当图有发生改变就会触发这个事件
    this.bpmnModeler.on('commandStack.changed', function () {
      console.log('aaa click')
      that.saveDiagram(function (err, xml) {
        that.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
      })
    })
  }
  // 当图发生改变的时候会调用这个函数，这个data就是图的xml
  setEncoded = (link, name, data) => {
    // 把xml转换为URI，下载要用到的
    const encodedData = encodeURIComponent(data)
    // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
    console.log(link, name, data, 'aaa')
    let xmlFile = new File([data], 'test.bpmn')
    //   console.log(xmlFile)
    if (data) {
      link.className = 'active'
      link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
      link.download = name
    }
  }
  // 下载为bpmn格式,done是个函数，调用的时候传入的
  saveDiagram = (done) => {
    // 把传入的done再传给bpmn原型的saveXML函数调用
    this.bpmnModeler.saveXML({ format: true }, function (err, xml) {
      done(err, xml)
    })
  }
  render() {
    return (
      <div class="containers">
        <div className="canvas" id="canvas" ></div>
        <div id="js-properties-panel" class="panel" ></div>
        <ul class="buttons">
          <li>
            <a ref="saveDiagram" href="javascript:" title="保存为bpmn" >保存为bpmn</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ReStart;