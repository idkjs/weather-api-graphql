"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _nodeGeocoder = _interopRequireDefault(require("node-geocoder"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('now-env');

var baseUrl = 'https://api.darksky.net/forecast/';
var urlParams = '?units=us&exclude=minutely,hourly,flags';
var mapLinkBase = 'https://www.google.com/maps/?q='; // Geocode a place through node-geocoder and the Google Maps API
// https://github.com/nchaulet/node-geocoder

function getLocation(apiKey, place) {
  var options = {
    provider: 'google',
    apiKey: apiKey
  };
  var geocoder = (0, _nodeGeocoder.default)(options);
  return new Promise(function (resolve, reject) {
    geocoder.geocode(place, function (err, res) {
      if (err) {
        reject(err);
      }

      var city = res[0].city;
      var country = res[0].country;
      var lat = res[0].latitude;
      var lng = res[0].longitude;
      resolve({
        city: city,
        country: country,
        coords: [lat, lng],
        mapLink: "".concat(mapLinkBase).concat(lat, ",").concat(lng)
      });
    });
  });
} // Pass the geographic coordinates of the location to the Dark Sky API to get current conditions


function getWeather(apiKey, coords) {
  return new Promise(function (resolve, reject) {
    (0, _request.default)("".concat(baseUrl).concat(apiKey, "/").concat(coords[0], ",").concat(coords[1]).concat(urlParams), function (error, response, body) {
      if (error) {
        reject(error);
      }

      var data = JSON.parse(body);
      var summary = data.currently.summary;
      var temperature = data.currently.temperature;
      var apttemperature = data.currently.apparentTemperature;
      var timezone = data.timezone;
      var time = data.currently.time;
      var icon = data.currently.icon;
      var sunrise = data.daily.data[0].sunriseTime;
      var sunset = data.daily.data[0].sunsetTime;
      var moonphase = data.daily.data[0].moonPhase;
      resolve({
        summary: summary,
        temperature: temperature,
        coords: coords,
        apttemperature: apttemperature,
        timezone: timezone,
        time: time,
        icon: icon,
        sunrise: sunrise,
        sunset: sunset,
        moonphase: moonphase
      });
    });
  });
}

;
var _default = {
  Query: {
    location: function location(parent, args, context) {
      return getLocation(process.env.GOOGLE, args.place);
    }
  },
  Location: {
    weather: function weather(parent, args, context) {
      return getWeather(process.env.DARKSKY, parent.coords);
    }
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map