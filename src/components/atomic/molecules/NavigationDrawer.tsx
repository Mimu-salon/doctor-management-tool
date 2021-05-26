import { memo, VFC } from 'react';
import Link from 'next/link';
import { Button, Drawer, DrawerBody, DrawerContent } from '@chakra-ui/react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const NavigationDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <DrawerBody p={0} bg='gray.100'>
          <Link href='/home'>
            <Button w='100%'>ホーム</Button>
          </Link>
          <Link href='/home/information_management'>
            <Button w='100%'>登録一覧</Button>
          </Link>
          <Link href='/home/setting'>
            <Button w='100%'>設定</Button>
          </Link>
          <Link href='/'>
            <Button w='100%'>ログアウト</Button>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});