import { memo, ReactNode, VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  background: string;
  color: string;
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { background, color, children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg={background}
      color={color}
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}>
      {children}
    </Button>
  );
});
