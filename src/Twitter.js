import React, { Component } from 'react'

class Twitter extends Component {


    componentDidMount() {
        const { posts,loading } = this.props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props
        if(this.props.loading !== prevProps.loading){
        console.log('componentDidMount:loading', loading)
        }
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount : Fui removido  =(')
    }
    
    
    render(){
        const { posts } = this.props
        console.log('render', posts)
        return (
            <div> test </div>
        )
    }
}

export default Twitter