import { RouteProps } from "react-router-dom";
import PageUrl from "./url.config";
import lazyLoad from "./lazyLoad";
export const normalRouter: RouteProps[] = [
  {
    // 根路由重定向
    exact: true,
    path: "/",
    component: lazyLoad(
      () => import(/* webpackChunkName: 'Home' */ "Pages/Home")
    ),
  },
  {
    // 根路由重定向
    exact: true,
    path: PageUrl.PageA,
    component: lazyLoad(
      () => import(/* webpackChunkName: 'PageA' */ "Pages/PageA")
    ),
  },
];
