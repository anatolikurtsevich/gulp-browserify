var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
var envs = fs.readdirSync('./gulp/envs/').filter(onlyScripts);

envs.forEach(function(env) {
    require('./envs/' + env);
});

tasks.forEach(function(task) {
	require('./tasks/' + task);
});