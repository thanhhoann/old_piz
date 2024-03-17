import { iconStyles } from '@/utils/icon-styles'
import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { FaRegPenToSquare } from 'react-icons/fa6'

export default function NavItemAddComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box onClick={onOpen} cursor="pointer">
        <FaRegPenToSquare style={iconStyles.nav.inactive} />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hi</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
