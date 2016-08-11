var Task  = require('../models/task');
var opn = require('opn');

const DocTask = Task.extend({
  run: function(keyword) {
    var searchUrl = 'https://angular.io/docs/ts/latest/api/#!?apiFilter=' + keyword;
    return opn(searchUrl);
  }
});

module.exports = DocTask;
