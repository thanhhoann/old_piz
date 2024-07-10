import { authStore } from '@/store/auth-store'
import { appBackgroundColor } from '@/utils/colors.utils'
import { minWidth, screenSizes } from '@/utils/screen-sizes.utils'
import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea
} from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'
import { useMedia } from 'use-media'

type UserPostModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function UserPostModal({ isOpen, onClose }: UserPostModalProps) {
  const user = authStore.use.user()

  const isMobile = useMedia(minWidth(screenSizes.MOBILE_L))
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent bg={appBackgroundColor} m="1rem">
          <ModalHeader>
            <Flex gap="1rem">
              {/* replace with user's avatar */}
              <FaRegUserCircle size={30} />
              <Text>{user?.username}</Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Textarea h="60vh" variant="unstyled" resize="none" placeholder="Write something" />
          </ModalBody>

          <ModalFooter>
            <Button>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
