import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {ActiveToolConsumer, ActiveToolContext} from "../active-tool-context";
import Home from "../mm-tool-1/home/Home";
import Home2 from "../mm-tool-2/home/Home2";

export default (props) => {
    const {activeTool} = useContext(ActiveToolContext);
    console.log('...props history ', props.history);
    const switchTool = () => {
        if (activeTool.match(/(service)/i)) {
            return (<Home history={props.history}/>);
        }

        if (activeTool.match(/mm-tools2/i)) {
            return (<Home2 history={props.history}/>);
        }


        return props.tools.map((cat, idx) => {
            return (
                <div key={'cat-' + idx}>
                    <h1>{cat.category.name} - {activeTool}</h1>
                    <div className={'flex-row'}>
                        {
                            cat.category.tools.map((tool, idx) => {
                                return (
                                    <div className={'flex-col'} key={'tool-' + idx}>
                                        <p>{tool.name}</p>
                                        <p>{tool.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        });
    };

    return (
        <ActiveToolConsumer>
            {({activeTool}) => {
                return (
                    <main>
                        {
                            switchTool()
                        }
                    </main>
                )
            }}

        </ActiveToolConsumer>
    )
}
