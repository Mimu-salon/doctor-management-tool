import { useCallback, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const router = useRouter();

  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'ログインしました', status: 'success' });
            router.push('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
          }
        })
        .catch(() => showMessage({ title: 'ログインできません', status: 'warning' }))
        .finally(() => setLoading(false));
    },
    [showMessage],
  );
  return { login, loading };
};
