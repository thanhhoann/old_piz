import FollowerList from '@/components/activity-page/FollowerList'
import { Stack } from '@chakra-ui/react'

export default function ActivityPage() {
  return (
    <>
      <Stack mt="1rem" gap="0.7rem">
        <FollowerList />
      </Stack>
    </>
  )
}
