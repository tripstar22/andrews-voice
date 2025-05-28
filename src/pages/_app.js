import PropTypes from 'prop-types';

import fontSansSerifDefault from '../styles/fonts';
import '../styles/globals.css';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <main className={fontSansSerifDefault.className}>
      <Component pageProp={pageProps} />
    </main>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
