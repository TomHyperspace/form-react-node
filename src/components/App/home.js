import React from 'react';
import PropTypes from 'prop-types';


const Home =({onChangeView}) => (

  <header className="page-nav">
    <h1>O-Scours</h1>
    <div className="page-nav-bar">
      <a href="#">Home</a>
      <a href="#"
        onClick={onChangeView('signup')}
      >
        Signup
      </a>
      <a href="#">Signin</a>
    </div>

  </header>

);

Home.propTypes = {
  onChangeView: PropTypes.func.isRequired,
}

export default Home;
