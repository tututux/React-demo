import local from './local';
import prod from './prod';
import test from './test';

/**
 * API服务地址配置
 */
const getDeploy = () => {
  /// 根据构建时的 环境变量 导出不同的 配置
  /// REACT_APP_  为自定义 环境变量:  REACT_APP_NODE_ENV => "production" | "development"
  /// NODE_ENV    为内置   环境变量:  NODE_ENV => "development" | "test" | "production"
  if (process.env.REACT_APP_NODE_ENV === 'production') {
    return prod;
  }
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    return local;
  }
  if (process.env.REACT_APP_NODE_ENV === 'test') {
    return test;
  }
  if (process.env.NODE_ENV === 'production') {
    return prod;
  }

  return local;
};

const deploy = getDeploy();
export default deploy;
