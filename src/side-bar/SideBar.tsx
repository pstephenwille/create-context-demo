import React, {useContext, useEffect, useState} from 'react';
import {ActiveToolContext, ActiveToolConsumer} from '../active-tool-context';

export default (props) => {
    // const [activeTool, setActiveTool] = useContext(ActiveToolContext);
console.log('...props ', props);
    return (
        <ActiveToolConsumer>
            {({activeTool, changeActiveTool})=>(
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
                                                    onClick={() => changeActiveTool(tool.name)}>{tool.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                    }
                </section>
            )}

        </ActiveToolConsumer>
    )
}
