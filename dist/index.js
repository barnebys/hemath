#!/usr/bin/env node
'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _heml = require('heml');

var _heml2 = _interopRequireDefault(_heml);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _elements = require('./elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseDir = process.cwd();
var sourceDir = `${baseDir}/src`;
var distDir = `${baseDir}/dist`;
var pjson = require(`${baseDir}/package.json`);
var source = `${sourceDir}/email.heml`;
var content = _fsExtra2.default.readFileSync(source, 'utf8');

var options = {
    validate: 'soft', // validation levels - 'strict'|'soft'|'none'
    cheerio: {}, // config passed to cheerio parser
    juice: {},
    beautify: {}, // config passed to js-beautify html method
    elements: _elements2.default
};

_fsExtra2.default.removeSync(`${distDir}`);
_mkdirp2.default.sync(`${distDir}/html`);
_mkdirp2.default.sync(`${distDir}/assets`);

_fsExtra2.default.copySync(_path2.default.resolve(__dirname, '../defaults/base.html.twig'), `${distDir}/html/base.html.twig`);
_fsExtra2.default.copySync(_path2.default.resolve(__dirname, '../defaults/message.html.twig'), `${distDir}/html/message.html.twig`);

_fsExtra2.default.readdir(`${sourceDir}`, function (err, files) {
    files.forEach(function (file) {
        if (file === 'email.heml') {
            return;
        }

        try {
            _fsExtra2.default.copySync(`${sourceDir}/${file}`, `${distDir}/${file}`);
        } catch (err) {
            console.error(err);
        }
    });
});

(0, _heml2.default)(content, options).then(function (_ref) {
    var html = _ref.html,
        metadata = _ref.metadata,
        errors = _ref.errors;

    html = html.replace(/src="assets\/(?:[^"\/]*\/)*([^"]+)"/g, "src=\"{{ getAssetUrl('themes/'~template~'/assets/$1', null, null, true) }}\"");
    _fsExtra2.default.writeFileSync(`${distDir}/html/email.html.twig`, html);
});

_fsExtra2.default.writeFileSync(`${distDir}//config.json`, (0, _stringify2.default)({
    name: pjson.name || '',
    author: pjson.author || '',
    authorUrl: pjson.url || '',
    features: pjson.features || []
}));