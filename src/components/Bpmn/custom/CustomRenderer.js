/*
 * @Author: Fus
 * @Date:   2020-04-02 21:07:15
 * @Desc: 在默认的Renderer基础上修改自定义Renderer
 */
import React, { Component } from 'react';
import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate
} from 'tiny-svg';
import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer' // 引入默认的renderer
import { customElements, customConfig } from '../../utils/util';

const HIGH_PRIORITY = 1500 // 最高优先级

export default class CustomRenderer extends BaseRenderer {
  constructor(eventBus, bpmnRenderer) {
    super(eventBus, HIGH_PRIORITY);
    this.bpmnRenderer = bpmnRenderer;
  }

  canRender(element) {
    return !element.labelTarget;
  }
  drawShape(parentNode, element) {
    const { type } = element;
    if (customConfig[type]) {
      const { url, attr } = customConfig[type];
      const { width, height } = attr;
      const customIcon = svgCreate('image', {
        ...attr,
        href: url,
      })
      element.width = width;
      element.height = height;
      svgAppend(parentNode, customIcon);
      // 判断是否有name属性来决定是否要渲染出label
      if (element.businessObject.name) {
        const text = svgCreate('text', {
          x: attr.x,
          y: attr.y + attr.height + 20, // y取的是父元素的y+height+20
          "font-size": "14",
          "fill": "#000"
        })
        text.innerHTML = element.businessObject.name
        svgAppend(parentNode, text)
        console.log(text)
      }
      return customIcon;
    }
    const shape = this.bpmnRenderer.drawShape(parentNode, element);
    return shape;
  }
  getShapePath(shape) {
    return this.bpmnRenderer.getShapePath(shape);
  }
}

CustomRenderer.$inject = ['eventBus', 'bpmnRenderer'];