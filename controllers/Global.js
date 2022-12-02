'use strict';

var utils = require('../utils/writer.js');
var Global = require('../service/GlobalService');

module.exports.getInfoDevice = function getInfoDevice (req, res, next, id) {
  Global.getInfoDevice(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setAccelerometer = function setAccelerometer (req, res, next, id) {
  Global.setAccelerometer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setFalsefall = function setFalsefall (req, res, next, id) {
  Global.setFalsefall(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setGyroscope = function setGyroscope (req, res, next, id) {
  Global.setGyroscope(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setHeartrate = function setHeartrate (req, res, next, id) {
  Global.setHeartrate(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setOximeter = function setOximeter (req, res, next, id) {
  Global.setOximeter(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setPosition = function setPosition (req, res, next, id) {
  Global.setPosition(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
