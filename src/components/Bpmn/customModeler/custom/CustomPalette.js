/*
 * @Author: Fus
 * @Date:   2020-03-20 10:44:51
 * @Desc: 
 */
export default function PaletteProvider(palette, create, elementFactory, globalConnect) {
  this.create = create;
  this.elementFactory = elementFactory;
  this.globalConnect = globalConnect;

  palette.registerProvider(this)
}

PaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory',
  'globalConnect',
]

// 重新写PaletteProvider用以覆盖原型上的getPaletteEntries方法，从而达到覆盖工具栏的效果
PaletteProvider.prototype.getPaletteEntries = function (element) {
  const { create, elementFactory, globalConnect } = this;
  return {
    'create.fs-task': {
      group: 'model',
      className: 'fs-task',
      title: '创建一个类型为fs-task的节点',
      action: {
        dragstart: createTask,
        click: createTask,
      }
    },
    'create.fs-task-1': {
      group: 'model',
      className: 'fs-task-1',
      title: '创建一个类型为fs-task-1的节点',
      action: {
        dragstart: createTask,
        click: createTask,
      }
    },
    'global-connect-tool': createConnect()
  }
  function createConnect() {
    return {
      group: 'tools',
      className: 'iconfont fs-line-icon',
      title: '新增线',
      action: {
        click: function (event) {
          globalConnect.toggle(event)
        }
      }
    }
  }

  function createTask(event) {
    const shape = elementFactory.createShape({
      type: 'bpmn:Task',
    })
    create.start(event, shape);
  }
}