import React, {useContext, useEffect, useState} from 'react';
import {ActiveToolContext, ActiveToolConsumer} from '../active-tool-context';
import Drawer from "../drawer/Drawer";

export default (props) => {
    const makeToolLinks = (items, clickHandler) => {
        return (
            <Drawer title={items.category.name}>
                {
                    items.category.tools.map((tool, idx) => {
                        return (
                            <div key={'tool-' + idx}>
                                <p onClick={(evt) => {
                                    evt.stopPropagation();
                                    clickHandler(tool.name)
                                }}>{tool.name}</p>
                                {
                                    tool.links &&
                                    makeSubToolLinks(tool, clickHandler)

                                }
                            </div>
                        );
                    })
                }
            </Drawer>
        )
    };

    const makeSubToolLinks = (items, clickHandler) => {
        return items.links.map((link, idx) => {
            return (
                <p key={'link-' + idx} onClick={(evt) => {
                    evt.stopPropagation();
                    clickHandler(link)
                }}> - {link}</p>
            )
        })
    };

    return (
        <ActiveToolConsumer>
            {({activeTool, changeActiveTool}) => (
                <section id={'sideBar'}>
                    {
                        props.tools &&
                        props.tools.map((cat, idx) => {
                            return makeToolLinks(cat, changeActiveTool)
                        })
                    }
                </section>
            )}
        </ActiveToolConsumer>
    )
}
