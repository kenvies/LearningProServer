const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success('成功啦');
  }
};
