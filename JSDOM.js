const jsdom = require('jsdom');
const { window } = new jsdom.JSDOM();
const document = window.document;

// Your script here...
const businessList = document.getElementById("business-list");