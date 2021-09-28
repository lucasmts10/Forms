import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Form1 from "./Forms/form1/form1";
import Form2 from "./Forms/form2/form2";
import Form3 from "./Forms/form3/Layout/MaterialLayout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form1" component={Form1} />
        <Route path="/form2" component={Form2} />
        <Route path="/form3" component={Form3} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
