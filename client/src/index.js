import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import ErrorBoundary from './components/Common/ErrorBoundary';
import { AUTH_TOKEN } from './constants';
import ContextProvider from './context/ContextProvider';
import './index.css';
import theme from './muiAsciiTheme';

/******************************************************************************
 * Source: https://www.apollographql.com/docs/react/networking/authentication/
 ******************************************************************************/
const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
/***********************************************************************/

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CssBaseline />
          <ContextProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ContextProvider>
        </BrowserRouter>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
