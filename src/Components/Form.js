import React, {Component} from 'react';
import '../Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            surname: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, surname, job } = this.state; 

        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                <label className = 'label' for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                     <label className = 'label' for="surname">Surname</label>
                <input 
                    type="text" 
                    name="surname" 
                    id="surname"
                    value={surname} 
                    onChange={this.handleChange} />
                <label className = 'label' for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <button className ="addBtn" type="submit">
                    Добавить
                </button>
            </form>
        );
    }
}

export default Form;