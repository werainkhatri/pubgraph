/**
 * Creates a graph for a give package name
 */
var createGraphBuilder = require('pubgraphbuilder');
var registryUrl = require('../config.js').registryUrl;

module.exports = buildGraph;

function buildGraph(pkgName, version, http, changed) {
  var graph = require('ngraph.graph')({uniqueLinkId: false});

  var graphBuilder = createGraphBuilder(function (url) {
    return http.get(url);
  }, registryUrl);

  graphBuilder.notifyProgress(changed);
  var promise = graphBuilder.createPubDependenciesGraph(pkgName, graph, version);

  return {
    graph: graph,
    start: promise
  };
}
