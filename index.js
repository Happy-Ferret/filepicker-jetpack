'use strict';

module.exports = FilePicker;

const utils = require('sdk/window/utils'),
      { Cc, Ci } = require('chrome'),
      { read } = require('sdk/io/file');

const DATA = 'data',
      PATH = 'path';

var _ = require('lodash');

var nsIFilePicker = Ci.nsIFilePicker;
var fp = Cc['@mozilla.org/filepicker;1'].createInstance(nsIFilePicker);


/**
 * FilePicker class.
 * @param {Object} opts
 *    opts = {
 *      fileFilter: `String`,
 *      fileExtension: `String`,
 *      title: `String`
 *    }
 *
 *    fileFilter - Refer [Filter constants](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFilePicker#Constants)
 *    fileExtension - Extension of the file.
 *    title - title of the file picker.

 */
function FilePicker (opts) {
  opts = opts || {};

  this.fileFilter = opts.fileFilter || null;
  this.fileExtension = opts.fileExtension || null;
  this.title = opts.title || null;
}

FilePicker.prototype = {

  /**
   * Open file picker.
   * @param {String} [optional] resultType
   *    Specify the output type.
   *    'data' - for file content
   *    'path' - for file path
   * @return {String}
   *    Returns path of file or file content.
   */
  open: function (resultType) {
    var that = this;
    var recentWindow = utils.getMostRecentBrowserWindow();

    fp.init(recentWindow, that.title, nsIFilePicker.modeOpen);
    fp.appendFilter(that.fileFilter, that.fileExtension);
    var rv = fp.show();
    if (rv == nsIFilePicker.returnOK) {
      var path = fp.file.path;

      if (_.isEqual(resultType, DATA)) {
        return read(path);
      } else {
        return path;
      }
    } else {
      return 'Cancelled';
    }
  },
}
