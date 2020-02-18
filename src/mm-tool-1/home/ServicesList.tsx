import React from 'react';
import {List, Datagrid, TextField} from 'react-admin';
import ServicesFilter from './ServicesFilter';
import {TccOverrides} from '../constants/overrides_const';

function handleClick(name, props) {
    props.history.push("/asset-detail/" + name);
}

export const ServicesList = props => (
    <div>
        <h2>Services</h2>
        <List {...props} filters={<ServicesFilter/>}>
        <Datagrid optimized rowClick={(id, resources, item) => handleClick(item.name, {...props})}>
            {
                TccOverrides.columnNames.map(
                    (name, id) =>
                        (<TextField key={id} source={name}/>)
                )
            }
        </Datagrid>
    </List></div>
);

