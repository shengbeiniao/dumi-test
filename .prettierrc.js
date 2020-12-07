const fabric = require('@umijs/fabric')

module.exports = {
  ...fabric.prettier,
  semi: false,
  trailingComma: 'none',
  arrowParens: 'avoid',
  jsxBracketSameLine: false
}