"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Location {\n  city: String\n  country: String\n  coords: [Float]\n  mapLink: String\n  weather: Weather\n}\n\ntype Weather {\n  summary: String\n  temperature: Float\n  coords: [Float]\n  apttemperature: Float\n  timezone: String\n  time: Int\n  icon: String\n  sunrise: Int\n  sunset: Int\n  moonphase: Float\n}\ntype Query {\n  location(place: String!): Location\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports.default = _default;
//# sourceMappingURL=index.js.map