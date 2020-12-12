import App, { Container } from 'next/app';
import React from 'react';
import theme from '@styles/themes';
import GlobalStyles from '@styles/global-styles';
import { ThemeProvider } from '@styles/themed-components';
import { UsersProvider } from '@context/auth';
import { PlayProvider } from '@context/play';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from '@components/Layout';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <UsersProvider>
            <PlayProvider>
              <Layout {...pageProps}>
                <Component {...pageProps} />
              </Layout>
            </PlayProvider>
          </UsersProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default ReactApp;
