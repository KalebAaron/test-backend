let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);
var env = require('../config/env')

console.log(process.env.CONNECTIONSTRING)

let store = new MongoDBStore(
	{
		uri: process.env.CONNECTIONSTRING,
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error(error);
});

module.exports = session({
	secret: 'It cannot be stopped',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 3 // 3 days 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})