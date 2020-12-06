/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 1985/10/26
 * @LastEditTime: 2020/12/06
 */
import '../styles/globals.less';
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
