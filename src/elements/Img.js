import HEML, { createElement } from '@heml/utils' // eslint-disable-line no-unused-vars
import {Img} from '@heml/elements'

export default createElement('img', {

    attrs: [ 'src', 'width', 'height', 'alt', 'infer', 'inline', 'style' ],
    children: false,
    defaultAttrs: {
        border: '0',
        alt: ''
    },

    render (attrs, contents) {
        return (
            <div data-slot-container="1">
                <div data-slot="image">
                    <Img {...attrs}>{contents}</Img>
                </div>
            </div>
        )
    }
})