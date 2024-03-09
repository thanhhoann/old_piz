import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
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
      <InputRightElement >
        <Button  size="sm" onClick={handleClick}>
          {show ? <ViewOffIcon/> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
