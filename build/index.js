"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('now-env');

var app = (0, _express.default)();
app.use((0, _cors.default)());
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema.default,
  resolvers: _resolvers.default
});
server.applyMiddleware({
  app: app,
  path: '/graphql'
});
var port = 8080;
app.listen({
  port: port
}, function () {
  console.log("\uD83D\uDE80  Server ready at http://localhost:".concat(port, "/graphql"));
});
//# sourceMappingURL=index.js.map