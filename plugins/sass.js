const fs = require('fs')
const sass = require('sass')

module.exports = (config, options) => {
	config.on('beforeWatch', () => {
		try {
			fs.writeFileSync(options.outFile, sass.renderSync(options).css)
		} catch (e) {
			console.error(e.message)
		}
	})
}
