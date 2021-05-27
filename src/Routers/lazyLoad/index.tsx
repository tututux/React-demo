import React from "react";
import { useMount, useUnmount } from "ahooks";
import importedComponent from "react-imported-component";
import { DefaultComponentImport } from "react-imported-component/dist/es5/types";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

/**
 * @name LoadableLoading
 * @description 页面加载动画
 */
const LoadableLoading: React.FunctionComponent<{ children?: any }> = React.memo(
  ({ children }) => {
    useMount(() => {
      Nprogress.start();
    });
    useUnmount(() => {
      Nprogress.done();
    });

    return children || null;
  }
);

/**
 * @name ErrorComponent
 * @description 页面加载失败提示
 */
const ErrorComponent: React.FunctionComponent = React.memo(() => {
  useMount(() => {
    Nprogress.done();
  });
  return <div>点击刷新页面</div>;
});

/**
 * @name LoadableComponent
 * @description 分割代码加载
 * @param {Function} loader - () => import('a'), or () => require('b')
 */
const lazyLoad = (
  loader: DefaultComponentImport<any>,
  LoadingChildren?: any
) => {
  return importedComponent(loader, {
    LoadingComponent: () => <LoadableLoading children={LoadingChildren} />,
    ErrorComponent,
  });
};

export default lazyLoad;
