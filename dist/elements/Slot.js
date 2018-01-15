'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('@heml/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

exports.default = (0, _utils.createElement)('slot', {
    attrs: ['type', 'key'],
    defaultAttrs: {
        'data-slot': 'text'
    },

    render(attrs, contents) {
        attrs['data-slot'] = attrs['type'];
        delete attrs['type'];

        if (attrs['key']) {
            var key = attrs.key;

            delete attrs['key'];
            return _utils2.default.renderElement(
                'div',
                { 'data-slot-container': key },
                _utils2.default.renderElement(
                    'div',
                    attrs,
                    contents
                )
            );
        }

        return _utils2.default.renderElement(
            'div',
            attrs,
            contents
        );
    }
});