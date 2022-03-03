module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
  "rules": {
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "warn",
    "no-empty-character-class": "error",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["warn", "all", { "ignoreJSX": "multi-line" }],
    "no-extra-semi": "warn",
    "no-func-assign": "warn",
    "no-import-assign": "warn",
    "no-inner-declarations": ["warn", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": ["warn", { 
      "skipRegExps": true, 
      "skipTemplates": true 
    }],
    "no-loss-of-precision": "warn",
    "no-misleading-character-class": "warn",
    "no-obj-calls": "warn",
    "no-prototype-builtins": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "warn",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "warn",
    "valid-typeof": "error",
    
    "curly": ["warn", "multi", "consistent"],
    "no-empty-function": "warn",

    "array-bracket-newline": ["warn", { "multiline": true }],
    "array-bracket-spacing": ["warn", "always"],
    "array-element-newline": ["warn", { "multiline": true, "minItems": 3 }],
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "capitalized-comments": "warn",
    "camelcase": "warn",
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": "warn",
    "eol-last": ["warn", "always"],
    "func-call-spacing": ["error", "never"],
    "func-names": ["error", "always"],
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": ["warn", "multiline"],
    "id-length": ["warn", { "min": 3, "exceptions": ["id", "_"]  }],
    "implicit-arrow-linebreak": ["warn", "beside"],
    "indent": ["warn", 2, { 
      "SwitchCase": 1, 
      "VariableDeclarator": "first",
      "MemberExpression": 1,
      "FunctionDeclaration": {"parameters": "first"},
      "FunctionExpression": {"parameters": "first"},
      "CallExpression": {"arguments": "first"},
      "ArrayExpression": "first",
      "ObjectExpression": "first",
      "ImportDeclaration": "first",
      "flatTernaryExpressions": false,
      "offsetTernaryExpressions": true,
      "ignoreComments": false
    }],
    "jsx-quotes": ["warn", "prefer-double"],
    "key-spacing": ["warn", { 
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict" ,
      "align": "value"
    }],
    "keyword-spacing": "warn",
    "linebreak-style": ["warn", "unix"],
    "lines-around-comment": ["warn", { 
      "beforeBlockComment": true,
      "afterBlockComment": true,
      "beforeLineComment": true,
      "afterLineComment": false
    }],
    "lines-between-class-members": ["warn", "always"],
    "max-depth": ["warn", 4],
    "max-len": ["warn", { "code": 85 }],
    "max-lines-per-function": ["warn", { 
      "max": 100,
      "skipBlankLines": true,
      "skipComments": true
    }],
    "max-nested-callbacks": ["warn", 3],
    "max-params": ["warn", 6],
    "max-statements-per-line": ["warn", { "max": 2 }],
    "multiline-comment-style": ["warn", "bare-block"],
    "multiline-ternary": ["warn", "always-multiline"],
    "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 3 }],
    "no-lonely-if": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multi-assign": "warn",
    "no-multiple-empty-lines": ["warn", { "max": 1 }],
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-object": "error",
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": ["warn", "below"],
    "object-curly-newline": ["warn", {
        "ObjectExpression": { "multiline": true, "minProperties": 4 },
        "ObjectPattern": { "multiline": true, "minProperties": 4 },
        "ImportDeclaration": { "multiline": true, "minProperties": 4 },
        "ExportDeclaration": { "multiline": true, "minProperties": 4 }
    }],
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": "warn",
    "one-var": ["warn", { "initialized": "never" }],
    "one-var-declaration-per-line": ["warn", "initializations"],
    "operator-assignment": ["warn", "always"],
    "operator-linebreak": ["warn", "before"],
    "padded-blocks": ["warn", "never", { "allowSingleLineBlocks": true } ],
    "prefer-exponentiation-operator": "warn",
    "prefer-object-spread": "warn",
    "quote-props": ["warn", "as-needed"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "semi-spacing": ["warn", {"before": false, "after": true}],
    "semi-style": ["warn", "last"],
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": [ "warn", {"words": true, "nonwords": false}],
    "spaced-comment": ["warn", "never"],
    "switch-colon-spacing": "warn",
    "template-tag-spacing": "warn",
    "wrap-regex": "warn",

    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": "warn",
    "constructor-super": "error",
    "generator-star-spacing": ["warn", "before"],
    "no-class-assign": "error",
    "no-confusing-arrow": "warn",
    "no-const-assign": "error",
    "no-duplicate-imports": ["error", { "includeExports": true }],
    "no-new-symbol": "error",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "error",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "error",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "require-yield": "error",
    "rest-spread-spacing": ["warn", "never"],
    "symbol-description": "error",
    "template-curly-spacing": "warn",
    "yield-star-spacing": ["warn", "before"],

    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
  }
};
