const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["bg.jpg","edit.png","favicon.png","flag.png","save.png","trash.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7dac1ad0.js","imports":["_app/immutable/start-7dac1ad0.js","_app/immutable/chunks/index-16a57d7b.js","_app/immutable/chunks/preload-helper-82682ae0.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
