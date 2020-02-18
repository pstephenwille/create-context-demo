import React from 'react';
import {Admin as Admin2, Resource, fetchUtils} from 'react-admin';
import tccDataProvider from '../common/tcc-data-provider';
import {ServicesList as Home2Service} from "./ServicesList";
import {TccOverrides, TccPaths} from '../constants/overrides_const';
import {Route} from 'react-router-dom';

import AssetDetails from '../asset-details/AssetDetails';
import TccLayout from "../common/TccLayout";


const dataProvider = tccDataProvider(TccPaths.base + TccPaths.resources, fetchUtils.fetch, TccOverrides);


export default (props) => {

    return (
        <Admin2
            layout={TccLayout}
            dataProvider={dataProvider}
            customRoutes={[
                <Route
                    exact
                    path="/asset-detail/:name"
                    component={(props) => <AssetDetails {...props} />}/>

            ]}>
            <Resource name={'mm-tools2'} list={Home2Service}/>
        </Admin2>
    )
};


