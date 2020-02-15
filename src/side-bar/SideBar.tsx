import React, {useContext, useEffect, useState} from 'react';
import {ActiveToolContext} from '../active-tool-context';

export default (props) => {
    const [activeTool, setActiveTool] = useContext(ActiveToolContext);

    let showTool = (name) => {
        setActiveTool(name)
    };
    return (
        <section id={'sideBar'}>

            {props.categories &&
            props.categories.map((cat, idx) => {
                return (
                    <div key={'cat-' + idx}>
                        <h2>{cat.category.name}</h2>

                        <ul>
                            {
                                cat.category.tools.map((tool, idx) => {
                                    return (
                                        <li key={'tool-nav-' + idx}
                                            onClick={() => showTool(tool.name)}>{tool.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
            }
        </section>
    )
}
