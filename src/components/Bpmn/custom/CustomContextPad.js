/*
 * @Author: Fus
 * @Date:   2020-04-13 14:18:15
 * @Desc: 在默认的ContextPad基础上修改
 */
export default class CustomContextPad {
  constructor(config, contextPad, create, elementFactory, injector, translate, modeling) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;
    this.modeling = modeling

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get('autoPlace', false);
    }

    contextPad.registerProvider(this); // 定义这是一个contextPad
  }

  getContextPadEntries(element) {
    const {
      autoPlace,
      create,
      elementFactory,
      translate,
      modeling
    } = this;
    function removeElement(e) { // 点击的时候实现删除功能
      modeling.removeElements([element])
    }
    function clickElement(e) {
      console.log(element)
      // 可以将节点信息存入model，以实现点击编辑按钮时，右侧属性面板数据同步
    }
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
}
CustomContextPad.$inject = [
  'config',
  'contextPad',
  'create',
  'elementFactory',
  'injector',
  'translate',
  'modeling'
];