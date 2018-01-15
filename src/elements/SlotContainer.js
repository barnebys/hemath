import HEML, { createElement } from '@heml/utils' // eslint-disable-line no-unused-vars

export default createElement('slotcontainer', {
    attrs: [ 'key' ],

    render (attrs, contents) {
        attrs['data-slot-container'] = attrs['key']
        delete attrs['key']

        return (
            <div {...attrs}>
                {contents}
            </div>
        )
    }
})