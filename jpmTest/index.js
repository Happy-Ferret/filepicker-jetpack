var self = require('sdk/self');
var FilePicker = require('./filepicker/');

var fp = new FilePicker();
console.log(fp.open('data'));
