import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppStore from 'data/AppStore';

import Header from 'components/HeaderComponent';
import Footer from 'components/FooterComponent';

import HomePage from 'pages/HomePage';
import OverviewPage from 'pages/OverviewPage';
import PlayerPage from 'pages/PlayerPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={AppStore}>
          <Fragment>
            <Header />

            <Route exact path="/" component={HomePage} />
            <Route path="/overview" component={OverviewPage} />
            <Route path="/player" component={PlayerPage} />

            <Footer />

          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
