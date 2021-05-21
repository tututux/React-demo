import cookiejs from 'cookiejs';
import { parse } from 'querystring';

/**
 * @name setToken
 * @description 保存Token
 * @param value
 */
export const setToken = (value: string) => {
  cookiejs.set('_token', value);
};

/**
 * @name getToken
 * @description 获取Token
 * @returns {string}
 */
export const getToken = (): string => {
  let res: any = cookiejs.get('_token');
  return res;
};

/**
 * @name cleanToken
 * @description 清除Token
 */
export const cleanToken = () => {
  return cookiejs.remove('_token');
};

/**
 * @name getPageQuery
 * @description 获取url参数
 * @returns {object}
 */
export const getPageQuery = () => parse(window.location.href.split('?')[1]);

