import App, { Container } from 'next/app';
import React from 'react';
import theme from '@styles/themes';
import GlobalStyles from '@styles/global-styles';
import { ThemeProvider } from '@styles/themed-components';
import { AuthProvider } from '@context/AuthContext';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from '@components/Layout';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    console.log('@@@@@@@@@@@@@@@@@@');
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default ReactApp;
