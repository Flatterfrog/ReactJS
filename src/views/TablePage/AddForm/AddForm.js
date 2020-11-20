import React, {Component} from 'react';
import '../AddForm/Form.css';
import PropTypes from 'prop-types';

class Form extends Component {
    
        
        state = {
            name: '',
            surname: '',
            job: ''
        };


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (e) => {
        const { name, surname, job } = this.state;
        e.preventDefault();
        this.props.addNewUser(name, surname, job)
    }

    render() {
        

        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                <label className = 'label' for="name">Name</label>
                <input required
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={this.handleChange} />
                     <label className = 'label' for="surname">Surname</label>
                <input required
                    type="text" 
                    name="surname" 
                    id="surname"
                    onChange={this.handleChange} />
                <label className = 'label' for="job">Job</label>
                <input required
                    type="text" 
                    name="job" 
                    id="job"
                    onChange={this.handleChange} />
                <button className ="addBtn" type="submit">
                    Добавить
                </button>
            </form>
        );
    }
}

Form.propTypes = {
    addNewUser: PropTypes.func,
}

Form.defaultProps = {
    addNewUser: () => {}
}

export default Form;