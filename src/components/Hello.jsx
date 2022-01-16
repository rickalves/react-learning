/**
 * This is an example of JSX class component.
 */
import React, { Component } from 'react'

export default class Hello extends Component {
    
    state = {
        type: this.props.type,
        name: this.props.name
    }
    
    constructor (props) {
        super(props)
        this.setName = this.setName.bind(this)
    }
   
    setType(e){
        this.setState({ type: e.target.value}) 
    }

    setName(e){
        this.setState({ name: e.target.value}) 
    }

    render(){
        const { name, type } = this.state
        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr />
                <input type="text" placeholder="type..." value={type} 
                    onChange={e => this.setType(e)}
                />
                <input type="text" placeholder="name..." value={name} 
                    onChange={this.setName}
                />
            </div>
        )
    }
}