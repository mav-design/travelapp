const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, "src/utilities/"),
      Templates: path.resolve(__dirname, "src/templates/"),
      app: path.resolve(__dirname, "/src/app/"),
      entities: path.resolve(__dirname, "/src/entities/"),
      features: path.resolve(__dirname, "/src/features/"),
      pages: path.resolve(__dirname, "/src/pages/"),
      widgets: path.resolve(__dirname, "/src/widgets/"),
      slices: path.resolve(__dirname, "/src/app/"),
    },
  },
};
