import React, { Component } from 'react';
import Table from './Components/Table';
import Form from './Components/Form';
import './App.css'
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import  AutorizationForm from '../src/views/auth/auth'



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
        const { characters } = this.state;
        
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AutorizationForm}/>
                <Route path="/users" component={Form}/>
                <Route render={() => <h2>OOOPS</h2>}/>
              <Table 
                   characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
               <Form handleSubmit={this.handleSubmit} />
                </Switch>
            </BrowserRouter>
            
        );
    }
}

export default App;
