import React from 'react';
import {List, Datagrid, TextField} from 'react-admin';
import ServicesFilter from './ServicesFilter';
import {TccOverrides} from '../constants/overrides_const';

function handleClick(name, props) {
    props.history.push("/mm-tools2/asset-detail/" + name);
}

export const ServicesList = props => {
    console.log('...list 2 ', props);
    return (
        <div>
            <h2>mm-tools2</h2>
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
    )
};

