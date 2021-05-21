import React from "react";
import { Route, RouteProps, Switch } from "react-router-dom";

/**
 * @name getRouteUrls
 * @description 获取路由配置对应的URL
 */
export const getRouteUrls = (routes: RouteProps[]) => {
  let res: string[] = [];
  routes.forEach((router) => {
    if (router?.path) res.push(router?.path?.toString());
  });

  return res;
};

/**
 * @name RenderRoutes
 * @description 根据路由配置生成路由组件
 */
export const RenderRoutes: React.FunctionComponent<{ routes: RouteProps[] }> =
  React.memo(({ routes }) => {
    return (
      <Switch>
        {routes.map((router) => (
          <Route key={router.path?.toString()} {...router} />
        ))}
      </Switch>
    );
  });
