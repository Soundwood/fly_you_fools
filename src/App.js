import React, {Component} from 'react'
import BallerForm from './BallerForm';
import UserForm from './UserForm'

class App extends Component {
    render() {
        return (
            <div>
                <BallerForm />
                <UserForm />
            </div>
        )
    }
} 

export default App;