const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
	.metadata({
		title: 'My Static Site & Blog',
		description: 'It\'s about saying »Hello« to the World.',
		generator: 'Metalsmith',
		url: 'http://www.metalsmith.io/'
	})
	.source('./src')
	.destination('./dist')
	.use(markdown())
	.use(layouts())
	.build(function (err, files) {
		if (err) { throw err; }
	});