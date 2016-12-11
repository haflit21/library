import Http from './../lib/http';
import fs from 'fs';

export default class ArticleController {
	constructor() {
		return;
	}

	routes() {
		return [
			{
				'path': '/articles',
				'method': Http.METHOD_GET,
				'action': 'getAction'
			}
		];
	}

	getAction() {
		return fs.readFileSync(__dirname+'/../fake/articles.json');
	}
}