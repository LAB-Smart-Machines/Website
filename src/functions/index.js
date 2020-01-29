const path = require("path");
const functions = require("firebase-functions");
const next = require("next");
const config = functions.config();

// Porting envs from firebase config
for (const key in config.envs) {
  process.env[key.toUpperCase()] = config.envs[key];
}

var dev = process.env.NODE_ENV !== "production";
var app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
});
var handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
