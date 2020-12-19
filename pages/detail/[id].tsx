import React from 'react';
import { NextPage, GetStaticProps } from 'next';

interface IProps {
  
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {}
  }
}

const Detail: NextPage<IProps> = () => {
  return (
    <div>
      详情页
    </div>
  );
}

export default Detail;