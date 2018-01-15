import HEML, { createElement } from '@heml/utils' // eslint-disable-line no-unused-vars

export default createElement('slot', {
    attrs: [ 'type', 'key' ],
    defaultAttrs: {
        'data-slot': 'text',
    },

    render (attrs, contents) {
        attrs['data-slot'] = attrs['type']
        delete attrs['type']

        if (attrs['key']) {
            const {key} = attrs
            delete attrs['key']
            return (
                <div data-slot-container={key}>
                    <div {...attrs}>
                        {contents}
                    </div>
                </div>
            )
        }

        return (
            <div {...attrs}>
                {contents}
            </div>
        )
    }
})