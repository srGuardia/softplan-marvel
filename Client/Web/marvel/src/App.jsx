import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "./Routes/routes";
import HeaderGlobal from "./Components/Header";
import LoadingGlobal from "./Components/Loading";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <HeaderGlobal />
      <Switch>
        <React.Suspense fallback={<LoadingGlobal />}>
          {routes.map((rotas, index) => (
            <Route
              key={rotas.key || index}
              exact={rotas.exact}
              path={rotas.path}
              component={rotas.component}
            />
          ))}
        </React.Suspense>
      </Switch>
    </Router>
  );
}
export default App;
