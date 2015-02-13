var self = require('sdk/self');
var FilePicker = require('./filepicker/');

var fp = new FilePicker({fileFilter: 'Text File',
                         fileExtension: '*',
                         title: 'A File Picker'});
console.log(fp.open('data'));
