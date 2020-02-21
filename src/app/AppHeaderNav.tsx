import React from 'react';
import IconPlaceholder from "../common/IconPlaceholder";

export default (props) => {

    return (
        <nav className={'header-nav'}>
            <h1 className={'title title-l--bold'}>FieldView</h1>

            <IconPlaceholder/>
            <div>
                <h1 className={'title-m'}>John Appleseed</h1>
                <p>The Climate Corporation</p>
            </div>
            <IconPlaceholder/>
        </nav>
    )
}
