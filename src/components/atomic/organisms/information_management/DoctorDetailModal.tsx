import { memo, VFC } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Textarea } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const DoctorDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalCloseButton />
        <ModalHeader>基本情報</ModalHeader>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>氏名</FormLabel>
              <Input value='●● ●●' isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>施設名</FormLabel>
              <Input value='●●病院' isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>診療科</FormLabel>
              <Input value='●●内科' isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalHeader>医師連絡方法</ModalHeader>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Eメール宛先</FormLabel>
              <Textarea placeholder='コピペ用にEメールの宛先を入力' />
            </FormControl>
            <FormControl>
              <FormLabel>Eメール</FormLabel>
              <Input value='xxxxx@.com' isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value='090-xxxx-xxxx' isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>都合のつきやすい曜日/時間帯</FormLabel>
              <Input value='●曜日 X時〜Y時' isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>連絡方法</FormLabel>
              <Select placeholder='選択してください'>
                <option value='option1'>医師にメール</option>
                <option value='option2'>医師にメール(CC秘書)</option>
                <option value='option3'>医師に電話</option>
                <option value='option4'>秘書にメール</option>
                <option value='option5'>秘書に電話</option>
                <option value='option6'>その他：備考に記載してください</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>秘書</FormLabel>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton borderRadius='5px' border='groove'>
                    <Box flex='1' textAlign='left'>
                      秘書がいれば連絡先をこちらへ
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack spacing={4}>
                      <FormControl>
                        <FormLabel>秘書：Eメール宛先</FormLabel>
                        <Textarea placeholder='コピペ用にEメールの宛先を入力' />
                      </FormControl>
                      <FormControl>
                        <FormLabel>秘書：Eメール</FormLabel>
                        <Input value='xxxxx@.com' isReadOnly />
                      </FormControl>
                      <FormControl>
                        <FormLabel>秘書：TEL</FormLabel>
                        <Input value='090-xxxx-xxxx' isReadOnly />
                      </FormControl>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalHeader>備考</ModalHeader>
        <ModalBody mx={4}>
          <Textarea minH='200px' placeholder='その他の注意事項を入力' />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
