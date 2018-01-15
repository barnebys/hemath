import HEML, { createElement } from '@heml/utils' // eslint-disable-line no-unused-vars
import {Container} from '@heml/elements'

export default createElement('container', {
    render (attrs, contents) {
        return (
            <div data-section-wrapper="1">
                <div data-section="1">
                    <Container {...attrs}>{contents}</Container>
                </div>
            </div>
        )
    }
})