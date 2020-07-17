import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import {ContextProvider} from 'src/utils/AppContext';
import { light } from 'src/utils/theme';
import Layout from 'src/components/Layout';
import { Inicio } from 'src/pages/index';

const AppDefaultConstants = {
  version: '1.0.0'
}

const Home:React.FC = (props) => {
  return (
      <Layout>
        <Switch>
          <Route path="/" component={Inicio} />
        </Switch>
      </Layout>
  )
}

const App:React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={light}>
        <ContextProvider defaultContext={AppDefaultConstants}>
          <BrowserRouter basename="/">
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
