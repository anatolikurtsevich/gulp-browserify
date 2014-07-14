var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
var env = fs.readdirSync('./gulp/env/').filter(onlyScripts);
var ci = fs.readdirSync('./gulp/ci/').filter(onlyScripts);


env.forEach(function(task) {
    require('./env/' + task);
});

tasks.forEach(function(task) {
	require('./tasks/' + task);
});

ci.forEach(function(task) {
    require('./ci/' + task);
});