module.exports = [
  /* [/^\/v1\/(\w+)/, '/api/v1/:1'] */
  [/admin\/(.*)/i, '/admin/v1/user', 'get'],
  ['/api/category/', '/api/category', 'get'],
  ['/api/book:categoryID', '/api/book:categoryID', 'get']
];
