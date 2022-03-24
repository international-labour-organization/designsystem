// The build file for Twing - this renders the twigs
const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
const fs = require('fs');
const jsonfile = require('jsonfile');
let loader = new TwingLoaderFilesystem('views');
let twing = new TwingEnvironment(loader);

/*
* Grab all the JSON files from /content, merge into one single JSON object
*/
const generatejson = (src = 'content') => {
	let jsonTemp = {};
	const targetFolder = `./${src}`;
	fs.readdirSync(targetFolder).forEach((fileName) => {
		const filePath = `${targetFolder}/${fileName}`;

		if (filePath.match('.json$', 'i')) {
			const obj = jsonfile.readFileSync(filePath);
			const transKeys = Object.keys(obj);
			if (transKeys.length === 0) {
				throw new Error(`${filePath} has NO content!`);
			}

			transKeys.forEach((key) => {
				if (!obj[key]) {
					throw new Error(
						`${filePath} => KEY: ${key} has no translation defined!`
					);
				}

				if (jsonTemp[key]) {
					throw new Error(`${filePath} => KEY: ${key} is duplicated!`);
				}

				jsonTemp[key] = obj[key];
			});
		} else {
			throw new Error(`${filePath} is not a JSON File!`);
		}
	});
	return jsonTemp;
};

/*
* Now generate the twig, using the JSON
*/
const context = generatejson();

twing.load('templates/index.twig').then((template) => {
		template.render(context).then((output) => {
				!fs.existsSync(`./build/`) && fs.mkdirSync(`./build/`, { recursive: true });
				fs.writeFile('./build/index.html', output, function(err) {
						if(err) {
								console.log(err);
						}
				});
		});
});
