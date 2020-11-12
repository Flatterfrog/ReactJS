import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  AutorizationForm from '../../views/auth/auth'
import Form from '../../views/TablePage/AddForm/AddForm';
import Table from '../../views/TablePage/Table/Table';



class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    

    render() {
        
        return (
            <Router>
            <Switch>
                <Route exact path="/" component={AutorizationForm}/>
                <Route path="/users" component={Table}/>
                <Route render={() => <h2>OOOPS</h2>}/>
                </Switch>
            </Router>
            
        );
    }
}

export default App;
