'use strict'

const hexColorRegex = require('hex-color-regex')
const a = require('assert')

const lineColors = require('.')

const isObj = o => o !== null && 'object' === typeof o && !Array.isArray(o)

a.ok(isObj(lineColors))
a.ok(Object.keys(lineColors).length > 0)

for (const product of Object.keys(lineColors)) {
	const byProduct = lineColors[product]
	a.ok(isObj(byProduct), product)
	a.ok(Object.keys(byProduct).length > 0, product)

	for (const line of Object.keys(byProduct)) {
		const colors = byProduct[line]
		a.ok(isObj(colors), product + ' ' + line)

		a.ok(hexColorRegex().test(colors.fg), product + ' ' + line)
		a.ok(hexColorRegex().test(colors.bg), product + ' ' + line)
	}
}
