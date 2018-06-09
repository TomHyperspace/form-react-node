import React from 'react';
import PropTypes from 'prop-types';

import Field from '~/components/Field';

const Signup = ({

  onChangeInput,
  firstName,
  lastName,
  email,
  password,
  onChangeView,
  onSubmit,
}) => (

<div className="app-signup">
  <h2 className="app-title">Sign Up </h2>
  <p className="app-desc">Veuillez remplir tous les champs afin de créer votre compte utilisateur.</p>
  <form
    className="form"
    onSubmit={onSubmit}
  >
    <Field
      name="firstName"
      placeholder="First name"
      handleChange={onChangeInput}
      value={firstName}
    />
    <Field
      name="lastName"
      placeholder="Last Name"
      handleChange={onChangeInput}
      value={lastName}
    />
    <Field
      name="email"
      placeholder="Adresse e-mail"
      handleChange={onChangeInput}
      value={email}
    />
    <Field
      name="password"
      placeholder="Mot de passe"
      handleChange={onChangeInput}
      value={password}
      type="password"
    />
    <button className="form-signup form-signup--login">
      Se connecter
    </button>
    <a
        className="app-link"
        onClick={onChangeView('home')}
      >
        Retour Home
      </a>
  </form>

</div>
);

Signup.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onChangeView: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Signup;
