import React, { Component } from 'react';

class ErrorBoundary extends Component {


    state ={hasErrorMessage:false, errorMessage:""}

    componentDidCatch =(error,info)=>{
        this.setState({hasErrorMessage:true,errorMessage:error})
    }

    render(){

            if (this.state.hasErrorMessage) return <h1>{this.state.errorMessage}</h1>
            else return this.props.children
            
        
    }

}
export default ErrorBoundary