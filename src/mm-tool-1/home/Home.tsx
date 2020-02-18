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
    return (
        <Admin
            layout={TccLayout}
            dataProvider={dataProvider}
            customRoutes={[
                <Route
                    exact
                    path="/services/asset-detail/:name"
                    component={(props) => <AssetDetails {...props} />}/>

            ]}>
            <Resource name={'services'} list={ServicesList}/>
        </Admin>
    )
};


