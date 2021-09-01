module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		jest: true
	},
	extends: ['standard', 'eslint:recommended'],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 12
	},
	rules: {
		quotes: [2, 'single'],
		'no-tabs': [2, { allowIndentationTabs: true }],
		indent: [2, 'tab'],
		semi: [2, 'always']
	}
};
