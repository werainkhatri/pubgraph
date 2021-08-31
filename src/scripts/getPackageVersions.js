var cache = Object.create(null);
var registryUrl = require('./config.js').registryUrl;

module.exports = getPackageVersions;

function getPackageVersions(http, q, packageName) {
  var cached = cache[packageName];
  if (cached) {
    return q.when(cached);
  }

  // todo
  return http.get(registryUrl + packageName).then(function(response) {
    var versions = [];
    response.data.versions.forEach(element => {
      versions.push(element.version);
    });
    return versions;
  });
}
