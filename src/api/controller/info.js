const Base = require('./base.js');

function getBookByID(id) {
  switch (id) {
    case '1':
      return require('../../assets/doc/android_doc.json');
    case '2':
      return require('../../assets/doc/ios_doc.json');
    case '3':
      return require('../../assets/doc/react_doc.json');
    case '4':
      return require('../../assets/doc/rn_doc.json');
    case '5':
      return require('../../assets/doc/node_doc.json');
    case '6':
      return require('../../assets/doc/js_doc.json');
    default:
      break;
  }
}

module.exports = class extends Base {
  indexAction() {
    const cid = this.get('categoryID');
    const bookid = this.get('bookID');
    try {
      const result = getBookByID(cid);
      let book = {};
      if (result) {
        result.map((item) => {
          if (item && item.id == bookid) {
            book = item;
          }
        });
      }
      return this.success(book);
    } catch (e) {
      console.log(e)
      return this.fail('暂无次类目的试题哦');
    }
  }
};
