import React, {useState} from 'react';
import IconPlaceholder from "../IconPlaceholder";

export default (props) => {
    const [isOpen, openDrawer] = useState(false);

    const toggleDrawer = () => {
        openDrawer(!isOpen);
    };

    return (
        <div id={props.id} className={`drawer`} onClick={() => toggleDrawer()}>
            <h4 className={'category title-m--bold'}>{props.title}</h4>
            <div data-testid={'category-'+ props.id} className={`drawer__items${isOpen ? '--open' : '--closed'}`}>
                {props.children}
            </div>
        </div>
    )
}

