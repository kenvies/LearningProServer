const Base = require('./base.js');
const list = require('../../assets/category.json');

module.exports = class extends Base {
  indexAction() {
    return this.success(list);
  }
};
