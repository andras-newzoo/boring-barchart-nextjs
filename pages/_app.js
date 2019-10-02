import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';
import initStore from '../store';
import rootReducer from '../store'
import furnitureBank2019 from '../store/furnitureBank2019/reducer'

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState);
};

const MyApp = ({ Component, pageProps, store }) => {
  return (
      <Container>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      </Container>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);