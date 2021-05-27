import React from "react";
import { Link } from "react-router-dom";
import PageUrl from "Routers/url.config";
import classes from "./home.module.less";
import HomeHeader from "Components/HomeHeader";
import HomeFooter from "Components/HomeFooter";
const index: React.FunctionComponent = () => {
  return (
    <div className={classes.home_body}>
      <HomeHeader title="home title" />
      <Link to={PageUrl.PageA} children={"go PageA"} />
      <div className={classes.home_text}>Home</div>
      <HomeFooter text='footer'/>
    </div>
  );
};

export default index;
