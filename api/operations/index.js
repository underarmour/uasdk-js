import findOne from './findOne';
import find from './find';
import findAll from './findAll';
import update from  './update';
import del from './delete';
import create from './create';

const OPS = {
  FIND_ONE: 'FIND_ONE',
  FIND_ALL: 'FIND_ALL',
  FIND: 'FIND',
  CREATE: 'CREATE',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
};

function Operations (...operations) {
  return function decorator(target) {
    for (let key of Object.keys(operations)) {
      let val = operations[key];

      switch (val) {
        case OPS.FIND_ONE:
          target.prototype.findOne = findOne;
          break;
        case OPS.FIND:
          target.prototype.find = find;
          break;
        case OPS.FIND_ALL:
          target.prototype.findAll = findAll;
          break;
        case OPS.CREATE:
          target.prototype.create = create;
          break;
        case OPS.DELETE:
          target.prototype.delete = del;
          break;
        case OPS.UPDATE:
          target.prototype.update = update;
          break;
      }
    }
  }
}

export {OPS};
export default Operations;
