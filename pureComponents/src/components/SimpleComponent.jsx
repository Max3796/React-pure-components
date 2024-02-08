import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    constructor(){
        super()
        this.state = {
            count:0,
            toggle: true
        }
    }

    changeToggle = () =>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    increaseCount = () =>{
        if(this.state.toggle){
            this.setState({
                count: this.state.count + 1
            })
        }else{
            this.setState({
                count: this.state.count
            })
        }
    }

  render() {
    console.warn("This is a simple component")
    return (
      <>
    <h1>Simple Counter</h1>
    <h3>{this.state.count}</h3>
    <button onClick={this.changeToggle} style={{ backgroundColor: this.state.toggle ? "green" : "red" }}>Toggle</button>

    <button style={{marginLeft: "10px"}} onClick={this.increaseCount}>+</button>

      </>
    )
  }
}
