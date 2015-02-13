filepicker-jetpack
================

Quickly create file picker in firefox add-ons ([jpm](https://github.com/mozilla/jpm) based).

## To use

  1. Install it:

    ```bash
    $ npm i filepicker-jetpack
    ```

  2. Import it and use:

    ```js
    var FilePicker = require('filepicker-jetpack');
    var fp = new FilePicker({fileExtension: '.txt',
                             title: 'Text file picker'});
    var fileContent = fp.open('data');
    ```

#### FilePicker(opts)

`opts` should be an object with 3 optional properties.

`fileFilter` - Refer [Filter constants](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFilePicker#Constants)

`fileExtension` - Extension of the file to pick, like '.txt'.

`title` - Title of the file picker dialog box.


#### open(resultType)

`resultType` specifies the type of result to be returned.

`'data'` - would return file content of the selected file.

`'path'` - would return path of the selected file.

## Test it

Clone the repo and run `npm install` inside the repo to install all the dependencies. Prepare for testing by running `npm test`. `cd` into jpmTest/ and run `jpm run -b /path/to/firefox-nightly`.

Example, in OS X

```bash
$ jpm run -b /Applications/Nightly.app
```
This works only in firefox nightly, like jpm.


## LICENSE

MPL
