import fs from 'fs';
import path from 'path';
import * as controllers from './controllers';

export default class RouterCollection {
	constructor(app) {
		this.definitions = [];
		this.files = fs.readdirSync('./controllers');

		this.files.map((filename) => {
			let className = path.parse(filename).name;

			try {
				let controller = new controllers[className];

				controller.routes().map((definition) => {
					app.get(definition.path, (req, res) => {
						res.write(eval(`controller.${definition.action}()`));
						res.send();
					});
				});

				this.definitions = this.definitions.concat(controller.routes());
			} catch (exception) {
				console.log(`La controller ${className} n'existe pas ou n'a pas été importer dans le fichier controller.js`);
			}
		});
	}
}