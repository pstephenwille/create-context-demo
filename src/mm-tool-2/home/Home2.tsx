import React from 'react';
import {Admin, Resource, fetchUtils} from 'react-admin';
import tccDataProvider from '../common/tcc-data-provider';
import {ServicesList} from "./ServicesList";
import {TccOverrides, TccPaths} from '../constants/overrides_const';
import {Route} from 'react-router-dom';

import AssetDetails from '../asset-details/AssetDetails';
import TccLayout from "../common/TccLayout";


const dataProvider = tccDataProvider(TccPaths.base + TccPaths.resources, fetchUtils.fetch, TccOverrides);


export default (props) => {
    console.log('...mm-tool 2', Object.keys(props));
    props = {...props, ...Resource};

    return (
        <Admin
            layout={TccLayout}
            dataProvider={dataProvider}
            {...props}
            customRoutes={[
                <Route
                    exact
                    path="/asset-detail/:name"
                    component={(props) => <AssetDetails {...props} />}/>

            ]}>
            <Resource name={'mm-tools2'} list={ServicesList}/>
        </Admin>
    )
};


