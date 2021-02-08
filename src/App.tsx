import React from 'react';
import logo from './logo.svg';
import './App.css';

import currentBooksQuery from "./gql/currentBooks.graphql";
import {useQuery} from "@apollo/client";

function App() {

  const {error,data} = useQuery(currentBooksQuery)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <pre className="App-body">
          <code>
            {JSON.stringify(data || error, null, 2)}
          </code>
        </pre>
      </header>
    </div>
  );
}

export default App;
