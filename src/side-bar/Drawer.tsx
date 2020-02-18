import React, {useState} from 'react';

export default (props) => {
    const [isOpen, openDrawer] = useState(false);

    const toggleDrawer = () => {
        console.log('...isopen ', isOpen);
        openDrawer(!isOpen);
    };

    return (
        <div className={`__drawer`} onClick={() => toggleDrawer()}>
            <h4>{props.title}</h4>
            <div className={`__drawer${isOpen ? '--open' : '--closed'}`}>
                {props.children}
            </div>
        </div>
    )
}

