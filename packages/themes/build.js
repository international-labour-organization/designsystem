// The build file for Style Dictionary - this imports the config and runs the build command
const StyleDictionary = require('style-dictionary').extend('config.json');

StyleDictionary.buildAllPlatforms();