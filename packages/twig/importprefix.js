const theme = require("@ilo-org/themes/tokens/theme/base.json");
const fs = require("fs");
const path = require("node:path");
const filepath = path.join(__dirname, "apps/storybook/config/prefix.yml");
let buffer = new Buffer.from(`prefix: ${theme.themeprefix.value}`);

fs.open(filepath, "w", function (err, fd) {
  if (err) {
    console.log("Can't open file");
    console.log(err);
  } else {
    fs.write(fd, buffer, 0, buffer.length, null, function (err) {
      if (err) {
        console.log("Can't write to file");
      } else {
        console.log("theme prefix added");
      }
    });
  }
});
