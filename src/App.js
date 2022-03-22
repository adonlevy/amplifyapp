import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'


import awsExports from './aws-exports';
import Amplify from 'aws-amplify';
Amplify.configure(awsExports);

function App({ isPassedToWithAuthenticator, signOut, user }) {

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}