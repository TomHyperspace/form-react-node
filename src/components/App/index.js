import React from 'react';

import Home from './home';
import Signup from './signup';
import './app.styl';


class App extends React.Component {
  state = {
    view: 'home',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  changeView = view => () => {
    this.setState({ view });
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
    const {
      view,
    } = this.state;
    return (
      <div className="page">
        { view === 'home' &&
          <Home
            onChangeView={this.changeView}
          />
        }
        <div className="app">
          { view === 'signup' &&
            <Signup
              onChangeInput={this.changeInput}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              password={this.state.password}
              onChangeView={this.changeView}
              // onSubmit={this.onSubmitSignup}
            />
          }
        </div>
      </div>
    );
  }
}


export default App;
