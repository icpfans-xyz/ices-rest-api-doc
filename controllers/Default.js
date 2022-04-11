'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiRestEventGET = function apiRestEventGET (req, res, next, xHasuraAdminSecret) {
  Default.apiRestEventGET(xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
