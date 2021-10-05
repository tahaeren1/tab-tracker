module.exports = {
    root: true,
    "rules": {
        "no-mixed-spaces-and-tabs": 0, // disable rule
    },
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'vue/no-parsing-error': 'off'
    }
}