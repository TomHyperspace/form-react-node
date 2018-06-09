import React from 'react';

import Home from './home';
import Signup from './signup';
import './app.styl';


class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  changeInput = (evt) => {
    // const name = evt.target.name;
    // const value = evt.target.value;
    // Équivalent (raccourci / sucre syntaxique) en ES6 => destructuring :
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    // } = this.state;
    return (
      <div className="page">
        <Home />
        <div className="app">
          <Signup
            onChangeInput={this.changeInput}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            // onSubmit={this.onSubmitSignup}
          />
        </div>
      </div>
    );
  }
}


export default App;
