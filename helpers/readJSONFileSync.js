var fs = require ('fs');

function readJSONFileSync (filePath, encoding) {
  if (undefined === typeof (encoding)) {
    encoding = 'utf8';
  };

  var content = fs.readFileSync(filePath, encoding);

  return JSON.parse(content);
};

module.exports = readJSONFileSync;