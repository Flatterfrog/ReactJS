import React from 'react';
import './auth.css';
import {Redirect} from 'react-router-dom'

class AutorizationForm extends React.Component{
  state = {
    login: '',
    password: '',
    logged: false
  }

  onInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  onAuthSubmit = () => {
    const {login, password} = this.state;
    if (login === "viktor" && password === "322228"){
      this.setState({
        logged: true
      })
    } else {
      alert ("Введите правильные данные")
    }
  }

  render(){
    if (this.state.logged){
      return <Redirect to="/users"/>
    }
    return(
     <div className="container">
      <div className="row">
        <form className="form-horizontal" onSubmit={this.onAuthSubmit}>
          <span className="heading">Sign in</span>
          <div className="form-group">
          <input type="text" className="form-control" id="inputLogin" placeholder="Login" name="login" onChange={this.onInputChange}/>
          <i className="fa fa-user"></i>
          </div>
          <div className="form-group help">
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={this.onInputChange}/>
          <i className="fa fa-lock"></i>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default AutorizationForm;