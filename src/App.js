import React, {Component}  from 'react'
import Twitter from './Twitter'

class App extends Component {

  state ={
    loading: false,
    actived: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading:true
      })
    }, 5000);
  }

  onRemove = () => {
    this.setState({
      actived:false
    })
  }
  onAdd = () => {
    this.setState({
      actived:true
    })
  }
  render(){

    const posts = ['du',1,2,3,4,5,6,7,8,9]

    return ( 
      <div>
      <button onClick={this.onRemove}>remover</button>
      <button onClick={this.onAdd}>Adicionar</button>
      {this.state.actived && (
        <Twitter posts={posts} />
      )}
      </div>
    )
  }
}

export default App