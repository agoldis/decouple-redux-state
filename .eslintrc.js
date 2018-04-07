module.exports = {
  "extends": [
      "standard",
      "plugin:react/recommended",
      "prettier",
      "prettier/react",
      "prettier/standard"
  ],
  "plugins": [
      "react",
      "prettier",
      "standard"
  ],    
  "env": {
      "es6": true,
      "node": true
  },
  "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
  },
  "rules": {
      "prettier/prettier": "error"
  }
};
