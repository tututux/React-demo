import React from "react";
import { Link } from "react-router-dom";
import PageUrl from "Routers/url.config";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      Home
      <Link to={PageUrl.PageA} children={"go PageA"} />
    </div>
  );
};

export default Home;
