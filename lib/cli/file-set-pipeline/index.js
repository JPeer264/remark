/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer. All rights reserved.
 * @module mdast:cli:file-set-pipeline
 * @fileoverview Process a collection of files.
 */

'use strict';

/*
 * Dependencies.
 */

var ware = require('ware');
var configure = require('./configure');
var traverse = require('./traverse');
var stdin = require('./stdin');
var transform = require('./transform');

/*
 * Middleware.
 */

var fileSetPipeline = ware()
    .use(configure)
    .use(traverse)
    .use(stdin)
    .use(transform);

/*
 * Expose.
 */

module.exports = fileSetPipeline;