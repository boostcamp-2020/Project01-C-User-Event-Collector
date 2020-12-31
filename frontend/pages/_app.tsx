import App from 'next/app';
import React from 'react';
import theme from '@styles/themes';
import GlobalStyles from '@styles/global-styles';
import { ThemeProvider } from '@styles/themed-components';
import { AuthProvider } from '@context/AuthContext';
import { PlayProvider } from '@context/PlayContext';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from '@components/Layout';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <PlayProvider>
              <Layout {...pageProps}>
                <Component {...pageProps} />
              </Layout>
            </PlayProvider>
          </AuthProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default ReactApp;
