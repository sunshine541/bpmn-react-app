/*
 * @Author: Fus
 * @Date:   2020-03-20 09:07:41
 * @Desc: 自定义节点
 */
import React, { Component } from 'react';

export default class CustomPalette {
  constructor(bpmFactory, create, elementFactory, palette, translate) {
    this.bpmFactory = bpmFactory;
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    palette.registerProvider(this);
  }
  // 这个函数就是绘制palette的核心
  getPaletteEntries = (element) => {
    return {
      'create.custom-task': {
        group: 'model', // 分组名   比如tools、event、gateway、activity等等,用于分类
        className: 'custom-task',
        title: this.translate('创建自定义节点'),
        action: { // 操作
          dragstart: this.createTask,// 开始拖拽时调用的事件
          click: this.createTask,// 点击时调用的事件
        }
      }
    }
  }
  // 创建元素
  createTask = (e) => {
    // 创建一个类型为‘bpmn:Task'的元素，其他类型还有 bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway
    const businesssObj = this.bpmFactory.create('bpmn:Task');
    const shape = this.elementFactory.createShape({
      type: 'bpmn:Task',
      businesssObj,
    })
    console.log(businesssObj, shape, 'aaaa obj');
    this.create.start(e, shape)
  }
}
CustomPalette.$inject = [
  'bpmnFactory',
  'create',
  'elementFactory',
  'palette',
  'translate'
]