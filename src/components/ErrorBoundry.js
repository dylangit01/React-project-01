import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false
        }
    }
    // Below hook means if any error happens, it will catch this error, and this hook will re-run below render()
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Oooops. That is not good!!</h1>
        }
            return this.props.children

    }
}

export default ErrorBoundry
