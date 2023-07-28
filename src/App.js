import './App.css';
import React from 'react';
import InputWithIcon from './InputWithIcon';
import { RiUserFill, RiLockPasswordFill } from 'react-icons/ri';

const App = () => {
  return (
    <div className="App">
      <div className="login-form">
        <h1> Login</h1>
        <form>
          <InputWithIcon classname="ic" type="text" placeholder="Username" icon={RiUserFill} />
          <InputWithIcon classname="ic" type="password" placeholder="Password" icon={RiLockPasswordFill} />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;


