import React, { Component } from 'react'



export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

