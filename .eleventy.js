const sassPlugin = require('./plugins/sass')

module.exports = config => {
	config.addWatchTarget('style')
	config.addPlugin(sassPlugin, {
		file: 'style/main.scss',
		outFile: '_site/img/main.css',
		sourceMap: true,
		sourceMapEmbed: true,
	})

	config.addPassthroughCopy('img')

	return {
		dataTemplateEngine: false,
		templateFormats: ['ejs'],
	}
}
