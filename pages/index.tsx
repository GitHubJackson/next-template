import React from 'react';
import { NextPage } from 'next';
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import style from '../styles/index.module.less';

const Home: NextPage = () => {
    return <div className={style['container']}>首页</div>;
};
export default Home;
