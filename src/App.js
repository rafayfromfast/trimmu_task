import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from "./graphql/client";
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import './App.css';
import SubmitJob from './screens/submitJob';


const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <SubmitJob />
      </ApolloHooksProvider>
  </ApolloProvider>
)

export default App;
