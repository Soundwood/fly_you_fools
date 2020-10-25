import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor() {
        super()
        this.state = {
            userLocation: "",
            userBudget: ""
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("dem options needed")
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Where do you NOT want to be?</label>
                    <input name="userLocation" value={this.state.userLocation} onChange={this.handleChange}>
                    </input>
                    <br/>
                    <label>How much you got?</label>
                    <input name="userBudget" value={this.state.userBudget} onChange={this.handleChange}>
                    </input>
                    <br/>
                    <input type="submit" value="Gimme dem options"/>
                </form>
            </div>
        )
    }
}

// rfc tab for functional component
// imp tab for import
// rcc tab for class component