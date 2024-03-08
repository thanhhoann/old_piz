import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

type CustomInputProps = {
  text: string
  type: string
}

export default function CustomInput({ type, text }: CustomInputProps) {
  return <Input type={type} placeholder={text} bg={inputBackgroundColor} border="none" focusBorderColor={inputFocusBorderColor} />
}

export const CustomPasswordInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        bg={inputBackgroundColor}
        border="none"
        focusBorderColor={inputFocusBorderColor}
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
