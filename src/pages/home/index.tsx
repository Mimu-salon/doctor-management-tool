import { memo, VFC } from 'react';

import { Layout } from '../../components/atomic/template/Layout';

const Home: VFC = memo(() => {
  return (
    <Layout title='ホーム | 医師情報管理ツール'>
      <p>Homeページです</p>
    </Layout>
  );
});

export default Home;
