import { memo, VFC } from 'react';

import { Layout } from '../../components/atomic/template/Layout';

const Setting: VFC = memo(() => {
  return (
    <Layout title='設定 | 医師情報管理ツール'>
      <p>Settingページです</p>
    </Layout>
  );
});

export default Setting;
