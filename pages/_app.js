import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';
import rootReducer from '../store'

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState);
};

const MyApp = ({ Component, pageProps, store }) => {
  return (
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);