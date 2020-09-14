module.exports = config => {
	config.addPassthroughCopy('img')
	return {
		dataTemplateEngine: false,
		templateFormats: ['ejs'],
	}
}
