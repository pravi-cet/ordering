import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BBuilder from './containers/BBuilder/BBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <BBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
