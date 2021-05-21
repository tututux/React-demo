import React, { useEffect } from "react";
import importedComponent from "react-imported-component";
import { DefaultComponentImport } from "react-imported-component/dist/es5/types";

/**
 * @name ErrorComponent
 * @description 页面加载失败提示
 */
const ErrorComponent: React.FunctionComponent = React.memo(() => {
  useEffect(() => {
    let loader = document.getElementById("launch-loader");
    if (loader) loader.style.display = "none";
  }, []);

  return <div>点击刷新页面</div>;
});

/**
 * @name LoadableComponent
 * @description 分割代码加载
 * @param {Function} loader - () => import('a'), or () => require('b')
 */
const lazyLoad = (
  loader: DefaultComponentImport<any>
  // LoadingComponent?: any
) => {
  return importedComponent(loader, {
    // LoadingComponent:LoadingComponent
    ErrorComponent,
  });
};

export default lazyLoad;
