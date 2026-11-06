const fs = require('node:fs');
const path = require('node:path');

const siteVercel = path.join(__dirname, '..', 'services', 'site', '.vercel');
const rootVercel = path.join(__dirname, '..', '.vercel');
if (fs.existsSync(siteVercel)) {
	fs.cpSync(siteVercel, rootVercel, { recursive: true });
	console.log('Copied services/site/.vercel -> .vercel');
}

const siteBuild = path.join(__dirname, '..', 'services', 'site', 'build');
const rootBuild = path.join(__dirname, '..', 'build');
if (fs.existsSync(siteBuild)) {
	fs.cpSync(siteBuild, rootBuild, { recursive: true });
	console.log('Copied services/site/build -> build');
}
