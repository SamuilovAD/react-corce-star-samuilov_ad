import React, {Component} from "react";
import ErrorIndicator from "../ErrorIndicator";

export default class ErrorBoundary extends Component
{
    state = {
        hasErrors: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasErrors: true
        });
    }

    render(){
        if (this.state.hasErrors) {
            return (<ErrorIndicator/>);
        }
        return (this.props.children);
    }
}
