/* Copyright 2013 Twitter, Inc. Licensed under The MIT License. http://opensource.org/licenses/MIT */

var advice = require('./lib/advice');
var component = require('./lib/component');
var compose = require('./lib/compose');
var logger = require('./lib/logger');
var registry = require('./lib/registry');
var utils = require('./lib/utils');

var flight = {
  advice: advice,
  component: component,
  compose: compose,
  logger: logger,
  registry: registry,
  utils: utils
};

module.exports = flight;
