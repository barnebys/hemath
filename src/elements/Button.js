import HEML, { createElement } from '@heml/utils' // eslint-disable-line no-unused-vars
import {Button} from '@heml/elements'

export default createElement('button', {
    render (attrs, contents) {
        return (
            <div data-slot-container="1">
                <div data-slot="button">
                    <Button {...attrs}>{contents}</Button>
                </div>
            </div>
        )
    }
})