module.exports = {
  extends: ["@humanoids/eslint-config", "plugin:storybook/recommended"],
  env: {
    jest: true
  },
  rules: {
    "react/react-in-jsx-scope": "off"
  }
};