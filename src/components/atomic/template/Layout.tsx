import { memo, ReactNode, VFC } from 'react';
import Head from 'next/head'

import { Header } from '../organisms/layout/Header';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: VFC<Props> = memo((props) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {children}
    </>
  );
});