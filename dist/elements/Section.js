'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('@heml/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

exports.default = (0, _utils.createElement)('section', {
    defaultAttrs: {
        'data-section': '1'
    },

    render(attrs, contents) {
        return _utils2.default.renderElement(
            'div',
            { 'data-section-wrapper': '1' },
            _utils2.default.renderElement(
                'div',
                attrs,
                contents
            )
        );
    }
});