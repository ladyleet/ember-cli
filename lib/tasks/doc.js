var Task  = require('../models/task');
var opn = require('opn');

const DocTask = Task.extend({
  run: function(keyword) {
    var searchUrl = 'https://www.google.com/search?q=site:emberjs.com/api/ ' + keyword;
    return opn(searchUrl);
  }
});

module.exports = DocTask;
