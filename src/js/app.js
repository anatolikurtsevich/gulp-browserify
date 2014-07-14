'use strict';

/* third-party dependencies */
var angular = require('angular'),
    uiRouter = require('angular-ui-router');

// load the template which are pushed to angular templateCache when building by "gulp templates".
require('./templates');

/* app modules */
var core = require('./modules/core');


angular.module('app', [
    uiRouter,
    'app.templates',
    core.name
]);



