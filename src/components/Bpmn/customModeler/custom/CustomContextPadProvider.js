/*
 * @Author: Fus
 * @Date:   2020-04-13 14:38:07
 * @Desc: 完全自定义contextpad
 */
export default function ContextPadProvider(contextPad, config, injector, translate, bpmnFactory, elementFactory, create, modeling, connect) {
  this.create = create
  this.elementFactory = elementFactory
  this.translate = translate
  this.bpmnFactory = bpmnFactory
  this.modeling = modeling
  this.connect = connect
  config = config || {}
  if (config.autoPlace !== false) {
    this._autoPlace = injector.get('autoPlace', false)
  }
  contextPad.registerProvider(this)
}

ContextPadProvider.prototype.getContextPadEntries = (element) => {
  const {
    autoPlace,
    create,
    elementFactory,
    translate,
    modeling
  } = this;
  function appendTask(event, element) {
    if (autoPlace) {
      const shape = elementFactory.createShape({ type: 'bpmn:Task' });
      autoPlace.append(element, shape);
    } else {
      appendTaskStart(event, element);
    }
  }

  function appendTaskStart(event) {
    const shape = elementFactory.createShape({ type: 'bpmn:Task' });
    create.start(event, shape, element);
  }
  function removeElement(e) { // 点击的时候实现删除功能
    modeling.removeElements([element])
  }
  function clickElement(e) {
    console.log(element)
    // 可以将节点信息存入model，以实现点击编辑按钮时，右侧属性面板数据同步
  }
  return {
    'append.fs-task': {
      group: 'model',
      className: 'fs-task',
      title: translate('创建一个类型为fs-task的任务节点'),
      action: {
        click: appendTask,
        dragstart: appendTaskStart
      }
    },
    'delete': {
      group: 'edit',
      className: 'iconfont fs-del-icon',
      title: translate('删除'),
      action: {
        click: removeElement
      }
    },
    'edit': {
      group: 'edit',
      className: 'iconfont fs-edit-icon',
      title: translate('编辑'),
      action: {
        click: clickElement
      }
    }
  };
}

ContextPadProvider.$inject = [
  'contextPad',
  'config',
  'injector',
  'translate',
  'bpmnFactory',
  'elementFactory',
  'create',
  'modeling',
  'connect'
]

ContextPadProvider.prototype.getContextPadEntries = function (element) { }
