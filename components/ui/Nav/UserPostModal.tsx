import { authStore } from '@/store/auth-store';
import { appBackgroundColor } from '@/utils/colors';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { FaRegUserCircle } from "react-icons/fa";


type UserPostModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function UserPostModal({ isOpen, onClose }: UserPostModalProps) {
  const user = authStore.use.user()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={appBackgroundColor}>
          <ModalHeader><FaRegUserCircle size={30} /> {user?.username}</ModalHeader>
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button >Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
