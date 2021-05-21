import React from "react";
import { Link } from "react-router-dom";
import PageUrl from "Routers/url.config";
const PageA: React.FunctionComponent = () => {
  return (
    <div>
      PageA
      <Link to={PageUrl.home} children={"go home"} />
    </div>
  );
};
export default PageA;
