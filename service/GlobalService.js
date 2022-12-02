'use strict';
const max = 9999
const min = 0
const names = ["Raul", "Jaime","Diego", "Daniel","Maria", "Juana", "Pepito", "Paco"]
/**
 * Se solicitan los datos de un dispositivo en concreto
 * el dispositivo solicita los datos al servidor calculado por la IA en el servidor.
 *
 * id Integer id del dispositivo
 * returns Device
 **/
exports.getInfoDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : Math.floor(Math.random() * (max - min + 1) + min),
  "device_type" : "Helmet",
  "userId" : names[Math.floor(Math.random() * (names.length - 0))].toLowerCase()+"@ihelmet.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * se almacenan los datos captados por el sensor
 * el dispositivo envía los datos captados por el sensor de acelerómetro.
 *
 * id Integer almacena los datos del sensor acelerometro
 * returns Boolean
 **/
exports.setAccelerometer = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * se almacenan las coordenadas captadas por el dispositivo
 * cuando se detecta una caída puede resultar un falso positivo en un plazo de diez segundos, si no se indica que ha sido una falsa caída el servidor avisará a emergencias.
 *
 * id Integer Almacena los datos de falsa caída
 * returns Boolean
 **/
exports.setFalsefall = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Se almacenan los datos captados por el sensor
 * el dispositivo envía los datos captados por el sensor de giroscopio.
 *
 * id Integer almacena los datos del sensor giroscopio
 * returns Boolean
 **/
exports.setGyroscope = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Se almacenan los datos captados por el sensor
 * el dispositivo envía los datos captados por el sensor de pulsaciones.
 *
 * id Integer almacena los datos del sensor pulsómetro
 * returns Boolean
 **/
exports.setHeartrate = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Se almacenan los datos captados por el sensor
 * el dispositivo envía los datos captados por el sensor de oxígeno.
 *
 * id Integer almacena los datos del sensor oxímetro
 * returns Boolean
 **/
exports.setOximeter = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * se almacenan las coordenadas captadas por el dispositivo
 * el dispositivo envía las coordenadas GPS actuales por si fuera necesario indicar su posicion a emergencias en caso de caída.
 *
 * id Integer almacena los datos de coordenadas
 * returns Boolean
 **/
exports.setPosition = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

