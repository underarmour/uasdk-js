import findById from '../operations/get';
import find from '../operations/find';
import findAll from '../operations/list';
import update from  '../operations/update';
import self from '../operations/self';
import del from '../operations/delete';
import create from '../operations/create';
import replace from '../operations/replace';

function Operations (operationList) {
    return function decorator(target) {

      if (operationList.indexOf('get') > -1) {
        target.prototype.findById = findById;
      }

      if (operationList.indexOf('find') > -1) {
        target.prototype.find = find;
      }

      if (operationList.indexOf('list') > -1) {
        target.prototype.findAll = findAll;
      }

      if (operationList.indexOf('update') > -1) {
        target.prototype.update = update;
      }

      if (operationList.indexOf('self') > -1) {
        target.prototype.self = self;
      }

      if (operationList.indexOf('delete') > -1) {
        target.prototype.deleteById = del;
      }

      if (operationList.indexOf('create') > -1) {
        target.prototype.create = create;
      }

      if (operationList.indexOf('replace') > -1) {
        target.prototype.replace = replace;
      }

    }
}

export default Operations;
