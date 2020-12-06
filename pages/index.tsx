import React from 'react';
import { NextPage } from 'next';
import { Button } from 'antd';
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import style from '../styles/index.module.less';

const Home: NextPage = () => {
  return (
    <>
      <div className={style['container']}>其他</div>
      <Button>测试</Button>
    </>
  );
};
export default Home;
