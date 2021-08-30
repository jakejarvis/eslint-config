module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      "jsx": true,
    },
  },
  env: {
    "es6": true,
  },
  rules: {
    // Stylistic:
    "brace-style": "error",
    "camelcase": ["error", {
      "properties": "never",
      "ignoreDestructuring": true,
    }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "curly": ["error", "all"],
    "func-call-spacing": "error",
    "max-len": ["warn", {
      "code": 120,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreStrings": true,
      "ignoreRegExpLiterals": true,
      "ignoreTemplateLiterals": true,
    }],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", {
      "var": "never",
      "let": "never",
      "const": "never",
    }],
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", {
      "avoidEscape": true,
      "allowTemplateLiterals": true,
    }],
    "semi": "error",
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      "named": "never",
      "anonymous": "always",
      "asyncArrow": "always",
    }],
    "spaced-comment": ["error", "always", {
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"],
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true,
      },
    }],
    "template-tag-spacing": ["error", "never"],

    // ES6:
    "arrow-body-style": ["error", "as-needed", {
      "requireReturnForObjectLiteral": false,
    }],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-var": "error",
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true,
    }],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true,
      },
      "AssignmentExpression": {
        "array": true,
        "object": false,
      },
    }],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "template-curly-spacing": "error",
  },
};
