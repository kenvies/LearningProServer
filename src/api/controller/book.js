const Base = require('./base.js');

function getBookByID(id) {
  switch (id) {
    case '1':
      return require('../../assets/android.json');
    case '2':
      return require('../../assets/ios.json');
    case '3':
      return require('../../assets/react.json');
    case '4':
      return require('../../assets/rn.json');
    case '5':
      return require('../../assets/node.json');
    case '6':
      return require('../../assets/js.json');
    default:
      break;
  }
}

module.exports = class extends Base {
  indexAction() {
    const id = this.get('categoryID');
    try {
      const result = getBookByID(id);
      return this.success(result);
    } catch (e) {
      return this.fail('暂无次类目的试题哦');
    }
  }
};
