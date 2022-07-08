module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/function-component-definition": "off",
    " react/function-component-definition": "off",

    "import/extensions": "off",
    "react/react-in-jsx-scope": "off",
    
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx:true,
      
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
};