'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('@heml/utils');

var _utils2 = _interopRequireDefault(_utils);

var _elements = require('@heml/elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _utils.createElement)('img', {

    attrs: ['src', 'width', 'height', 'alt', 'infer', 'inline', 'style'],
    children: false,
    defaultAttrs: {
        border: '0',
        alt: ''
    },

    render(attrs, contents) {
        return _utils2.default.renderElement(
            'div',
            { 'data-slot-container': '1' },
            _utils2.default.renderElement(
                'div',
                { 'data-slot': 'image' },
                _utils2.default.renderElement(
                    _elements.Img,
                    attrs,
                    contents
                )
            )
        );
    }
}); // eslint-disable-line no-unused-vars