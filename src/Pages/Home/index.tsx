import React from "react";
import { Link } from "react-router-dom";
import PageUrl from "Routers/url.config";
import classes from "./home.module.less";
const index: React.FunctionComponent = () => {
  return (
    <div className={classes.home_body}>
      Home
      <Link to={PageUrl.PageA} children={"go PageA"} />
    </div>
  );
};

export default index;
