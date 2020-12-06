/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2020/12/06
 * @LastEditTime: 2020/12/06
 */

import { ReactNode } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

import '../styles/globals.less';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;
