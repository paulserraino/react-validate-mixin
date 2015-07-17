var fs = require('fs')
var ReactTools = require('react-tools')
var ogJS = require.extensions['.js']

require.extensions['.js'] = function (module, filename) {
  if ( filename.indexOf('node_modules/') >=0 ) {
    return (ogJS || require.extensions['.js'])(module, filename)
  }

  var content = fs.readFileSync(filename, 'utf8')
  var compiled = ReactTools.transform(content, {harmony: true})
  return module._compile(compiled, filename)
}