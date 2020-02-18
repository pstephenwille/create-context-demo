import React from 'react';
import {Layout, AppBar} from 'react-admin';


const TccNoAppBar = props => ('');
const TccNoSideBar = props => ('');

const TccLayout = props => {
    return (
        <Layout
            {...props}
            appBar={TccNoAppBar}
            sidebar={TccNoSideBar}
        />
    );
};

export default TccLayout;
