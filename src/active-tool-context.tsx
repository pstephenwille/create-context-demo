import React, {useState} from 'react';

let ActiveToolContext;
const {
    Provider,
    Consumer
} = (ActiveToolContext = React.createContext(null, null));

class ActiveToolProvider extends React.Component<any, any> {
   state = {
        activeTool: 'default'
    };


    componentDidMount(): void {
        this.setState({activeTool: window.location.hash.substr(2)})
    }

    changeActiveTool = (tool) => {
        this.setState({activeTool: tool});
        switch (tool) {
            case 'services':
                window.location.href = '#/services';
                this.props.history.push('/services');
                break;
            case 'mm-tool2':
                window.location.href = '#/mm-tools2';
                this.props.history.push('/mm-tools2');
                break;
            case 'service-details':
                window.location.href = '#/services/asset-detail/customer-insights';
                this.props.history.push('/services/asset-detail/customer-insights');
                break;
            default:
                window.location.href = '#/';
                this.props.history.push('/');
                break;
        }
    };

    render() {
        return (
            <Provider value={{...this.state, changeActiveTool: this.changeActiveTool}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    ActiveToolProvider,
    Consumer as ActiveToolConsumer,
    ActiveToolContext
};
