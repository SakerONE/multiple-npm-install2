var exec = require('child_process').exec,
	packages = ['pkg1', 'pkg2', 'pkg3', 'pkg4', 'pkg5', 'pkg6'];

packages.forEach(function(pkg){
	var child = exec('npm install', {cwd: pkg}, function(){
		console.log(pkg + ' done');
	});

	child.stderr.pipe(process.stdout);
});