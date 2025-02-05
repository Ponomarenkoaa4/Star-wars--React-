const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@ui": "src/components/Ui",
    "@constants": "src/constants",
    "@containers": "src/containers",
    "@hoc-helpers": "src/hoc-helpers",
    "@services": "src/services",
    "@utils": "src/utils",
    "@routes": "src/routes",
    "@static": "src/static",
    "@hooks": "src/hooks",
    "@store": "src/store",
    "@context": "src/context",
    "@styles": "src/styles",
  })(config);

  return config;
};
