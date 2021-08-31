/**
 * This file represent navbar directive. Navbar allows users to search npm
 * for packages
 */
require('./controller');

module.exports = require('an').directive(navbar);

var fs = require('fs');
function navbar() {
  return {
    scope: {
      onPackageSelected: '='
    },
    restrict: 'E',
    template : fs.readFileSync(__dirname + '/navbar.html', 'utf8')
  };
}
