import { memo, VFC } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  doctorName: string;
  hospital: string;
  department: string;
  onClick: () => void;
};

export const DoctorCard: VFC<Props> = memo((props) => {
  const { imageUrl, doctorName, hospital, department, onClick } = props;
  return (
    <Box
      w='260px'
      h='280px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={onClick}>
      <Stack textAlign='center'>
        <Image borderRadius='full' boxSize='160px' src={imageUrl} alt={doctorName} m='auto' />
        <Text fontSize='lg' fontWeight='bold'>
          {doctorName}
        </Text>
        <Text fontSize='sm'>{hospital}</Text>
        <Text fontSize='sm' color='gray'>
          {department}
        </Text>
      </Stack>
    </Box>
  );
});
