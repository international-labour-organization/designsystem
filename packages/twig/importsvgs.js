const fs = require("fs-extra");
const source = "node_modules/@ilo-org/icons/svg";
const destination = "images";

fs.copy(source, destination);
