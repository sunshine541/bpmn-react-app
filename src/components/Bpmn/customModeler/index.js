/*
 * @Author: Fus
 * @Date:   2020-03-20 11:12:57
 * @Desc: 
 */
import Modeler from 'bpmn-js/lib/Modeler';
import inherits from 'inherits';
import CustomModule from './custom';

console.log('aaa CustomModule', CustomModule)

export default function CustomModeler(options) {
  Modeler.call(this, options);
  this._customElements = [];
}

inherits(CustomModeler, Modeler)
CustomModeler.prototype._modules = [].concat(
  CustomModeler.prototype._modules, [
  CustomModule
]
)