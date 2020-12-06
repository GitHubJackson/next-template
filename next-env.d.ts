/*
 * @Desc: 
 * @Author: JacksonZhou
 * @Date: 2020/12/06
 * @LastEditTime: 2020/12/06
 */
/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}