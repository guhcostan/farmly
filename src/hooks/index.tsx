import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../clients/apollo';
import { AuthProvider } from './auth';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </ApolloProvider>
  );
};

export default HooksProvider;
