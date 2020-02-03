import React from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import { withRouter } from 'react-router-dom';
import Routes from './routes';

import AuthInit from './components/AuthInit/AuthInit';

function App({history}) {

  AuthInit(history);

  return (
    <div className="App">
      <Layout>
        {Routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);