const { Namer } = require("@parcel/plugin");

module.exports = new Namer({
  name({ bundle }) {
    if (bundle.type === "js") {
      return `main.${bundle.hashReference}.js`;
    }

    // Allow the next namer to handle this bundle.
    return null;
  },
});
