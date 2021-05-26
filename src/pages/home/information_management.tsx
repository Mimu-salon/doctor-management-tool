import { memo, useCallback, useEffect, VFC } from 'react';
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

import { Layout } from '../../components/atomic/template/Layout';
import { DoctorCard } from '../../components/atomic/organisms/information_management/DoctorCard';
import { DoctorDetailModal } from '../../components/atomic/organisms/information_management/DoctorDetailModal';
import { useAllUsers } from '../../components/hooks/useAllUsers';

const InformationManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickDoctor = useCallback(() => onOpen(), []);

  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <Layout title='登録一覧 | 医師情報管理ツール'>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <DoctorCard
                imageUrl='https://source.unsplash.com/random'
                doctorName={user.username}
                hospital={user.website}
                department={user.website}
                onClick={onClickDoctor}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <DoctorDetailModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
});

export default InformationManagement;
