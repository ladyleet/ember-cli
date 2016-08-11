'use strict';

var Command         = require('../models/command');
var docTask         = require('../tasks/doc');

module.exports = Command.extend({
  name: 'doc',
  description: 'Opens the official Ember.js documentation for a given keyword.',
  works: 'everywhere',

  anonymousOptions: [
    '<keyword>'
  ],

  run: function(commandOptions, rawArgs) {
    var keyword = rawArgs[0];

    var docTask = new DocTask({
       ui: this.ui,
       analytics: this.analytics,
       project: this.project
     });

    return docTask.run(keyword);
  }
});
