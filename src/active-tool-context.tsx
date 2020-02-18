import React, {useState} from 'react';

let ActiveToolContext;
const {
    Provider,
    Consumer
} = (ActiveToolContext = React.createContext(null, null));

class ActiveToolProvider extends React.Component<any, any> {
    state = {
        activeTool: ''
    };

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        const activeTooLName = this.props.history.location.pathname.substr(1);
        this.setState({activeTool: activeTooLName})
    }

    changeActiveTool = (tool) => {
        this.setState({activeTool: tool});
        switch (tool) {
            case 'services':
                this.props.history.push('/services');
                break;
            case 'mm-tool2':
                this.props.history.push('/mm-tools2');
                break;
            case 'service-details':
                this.props.history.push('/services/asset-detail/customer-insights');
                break;
            default:
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
