import HEML, { createElement } from '@heml/utils' // eslint-disable-line no-unused-vars

export default createElement('section', {
    defaultAttrs: {
        'data-section': '1',
    },

    render (attrs, contents) {
        return (
            <div data-section-wrapper="1">
                <div {...attrs}>
                    {contents}
                </div>
            </div>
        )
    }
})