import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default (props) => {

    console.log('..props ', props);
    return (
        <article>
            {
                props.categories.map((cat, idx) => {
                    return (
                        <div>
                            <h1>{cat.category.name}</h1>
                            {
                                cat.category.tools.map((tool, idx) => {
                                    return (
                                        <div key={'tool-' + idx}>
                                            <p>{tool.name}</p>
                                            <p>{tool.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </article>
    )
}
