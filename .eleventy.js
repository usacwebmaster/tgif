const sassPlugin = require('./plugins/sass')
const navPlugin = require('./plugins/nav')

module.exports = config => {
	config.addWatchTarget('style')
	config.addPlugin(sassPlugin, {
		file: 'style/main.scss',
		outFile: '_site/img/main.css',
		sourceMap: true,
		sourceMapEmbed: true,
	})

	config.addPlugin(navPlugin)

	config.addPassthroughCopy({
		img: true,
		'node_modules/typeface-montserrat/files': 'img/files',
		'node_modules/typeface-open-sans/files': 'img/files',
	})

	return {
		dataTemplateEngine: false,
		templateFormats: ['ejs'],
	}
}
