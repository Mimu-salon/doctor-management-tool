import { memo, VFC } from 'react';
import Link from 'next/link';
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';

import { NavigationDrawer } from '../../molecules/NavigationDrawer';
import { NavigationIconButton } from '../../atoms/NavigationIconButton';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as='nav' bg='teal.500' color='gray.50' align='center' justify='space-between'>
        <Flex as='a' align='center' mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading fontSize={{ base: 'md', md: 'lg' }} p={{ base: 3, md: 5 }}>
            <Link href='/home' passHref><a>医師情報管理ツール</a></Link>
          </Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link href='/home' passHref>
              <a>ホーム</a>
            </Link>
          </Box>
          <Box pr={4}>
            <Link href='/home/information_management' passHref>
              <a>登録一覧</a>
            </Link>
          </Box>
          <Box pr={4}>
            <Link href='/home/setting' passHref>
              <a>設定</a>
            </Link>
          </Box>
          <Box pr={4}>
            <Link href='/' passHref>
              <a>ログアウト</a>
            </Link>
          </Box>
        </Flex>
        <NavigationIconButton onOpen={onOpen} />
        <NavigationDrawer onClose={onClose} isOpen={isOpen} />
      </Flex>
    </>
  );
});
