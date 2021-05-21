import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { normalRouter } from "./config";
import { getRouteUrls, RenderRoutes } from "./utils";

const SwtichRoute: React.FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route exact path={getRouteUrls(normalRouter)}>
        <RenderRoutes routes={normalRouter} />
      </Route>

      {/* 页面结构
      <Route exact path={[pageA,PageB]}>
        <Layout>
          <Switch>
            <Route exact path='pageA' component={pageA}/>
            <Route exact path='pageA' component={pageB}/>
          </Switch>
        </Layout>
      </Route> */}
    </Switch>
  );
};

const index: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <SwtichRoute />
    </Router>
  );
};

export default index;
