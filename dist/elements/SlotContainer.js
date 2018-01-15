'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('@heml/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

exports.default = (0, _utils.createElement)('slotcontainer', {
    attrs: ['key'],

    render(attrs, contents) {
        attrs['data-slot-container'] = attrs['key'];
        delete attrs['key'];

        return _utils2.default.renderElement(
            'div',
            attrs,
            contents
        );
    }
});