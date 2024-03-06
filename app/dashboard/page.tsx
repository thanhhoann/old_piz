import Image from 'next/image'
import { Flex, Text, Button } from '@radix-ui/themes'

export default function Dashboard() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  )
}
