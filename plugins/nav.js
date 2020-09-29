module.exports = config => {
	config.addCollection('nav', c =>
		c.getAllSorted().reduce((root, page) => {
			const path = virtualUrl(page).split('/').slice(1)
			const item = path.reduce((item, seg) => item.children[seg] = item.children[seg] || new Item, root)
			item.data = page.data
			return root
		}, new Item))
}

class Item {
	data
	children = {}

	contains(page) {
		return virtualUrl(page).startsWith(virtualUrl(this.data.page))
	}
}

// Simulated URL, unaffected by destination path (reflecting only the hierarchy)
function virtualUrl(page) {
	return page.filePathStem.replace(/\/index$/, '')
}
