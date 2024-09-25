/* eslint-disable */
// The build file for Style Dictionary - this imports the config and runs the build command
const StyleDictionary = require("style-dictionary").extend("config.json");

const { fileHeader } = StyleDictionary.formatHelpers;

/**
 * Register a new format
 *
 */
StyleDictionary.registerFormat({
  name: `scss/individualMaps`,
  formatter: function ({ dictionary, file }) {
    const { tokens, properties } = dictionary;

    return (
      fileHeader({ file }) +
      `/**\n* TOKENS:\n*/\n\n` +
      jsonToSassVars(dictionary) +
      `\n\n` +
      `/**\n* MAPS:\n*/\n\n` +
      Object.keys(properties)
        .map(
          (property) =>
            `// ${property} MAP:\n\n`.toUpperCase() +
            `$${property}: ${jsonToSassMap(properties[property], 0)};\n`
        )
        .join(`\n`)
    );
  },
});

/**
 * jsonToSassVars
 *
 * Outputs token JSON as flat list of SASS variables
 *
 */
function jsonToSassVars(dictionary) {
  return dictionary.allTokens
    .map((token) => `$${token.name}: ${getValue(token, dictionary)} !default;`)
    .join(`\n`);
}

/**
 * jsonToSassMap
 *
 * Outputs token JSON as SASS maps
 *
 */
function jsonToSassMap(obj, depth) {
  let output = "";
  if (obj.hasOwnProperty("value")) {
    // if we have found a leaf (a property with a value) append the value
    output += `$${obj.name}`;
  } else {
    // if we have found a group of properties, use the Sass group "(...)" syntax and loop -recursively- on the children
    output += "(\n";
    output += Object.keys(obj)
      .map(function (newKey) {
        let newProp = obj[newKey];
        let indent = "  ".repeat(depth + 1);
        return `${indent}'${newKey}': ${jsonToSassMap(newProp, depth + 1)}`;
      })
      .join(",\n");
    output += "\n" + "  ".repeat(depth) + ")";
  }
  return output;
}

/**
 * getValue
 *
 * Given a token, return the value of that token as a string
 *
 */
function getValue(token, dictionary) {
  let value = dictionary.usesReference(token.original.value)
    ? `$${dictionary.getReferences(token.original.value)[0].name}`
    : JSON.stringify(token.value);

  return value.replace(/"/g, "");
}

// Build!

StyleDictionary.buildAllPlatforms();
