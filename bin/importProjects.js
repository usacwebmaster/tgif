const readline = require('readline')

const data = []
let curProject = {}

const matchers = [
	{
		pattern: /^\*\*(\w+)\s+(\d+)\*\*$/,
		handler(quarter, year) {
			curProject.quarter = quarter
			curProject.year = parseInt(year)
		}
	},

	{
		pattern: /^- (.+), (.+)/,
		handler(org, name) {
			curProject.org = org
			curProject.name = name
		}
	},

	{
		pattern: /^\s+- \*\*About the Project:\*\* (.+)/,
		handler(desc) {
			curProject.desc = desc
		}
	},

	{
		pattern: /^\s+- \*\*Award Amount:\*\* (.+)/,
		handler(amt) {
			curProject.amt = parseFloat(amt.replace(/[$,]/g, ''))
			data.push(curProject)

			curProject = {
				quarter: curProject.quarter,
				year: curProject.year,
			}
		}
	},
]

readline.createInterface({
	input: process.stdin,
	crlfDelay: Infinity,
}).on('line', line => {
	for (const {pattern, handler} of matchers) {
		const match = line.match(pattern)
		if (match) {
			handler(...match.slice(1))
		}
	}
}).on('close', () => {
	process.stdout.write(JSON.stringify(data, null, '\t'))
})
