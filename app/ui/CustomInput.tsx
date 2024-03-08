import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { Input } from '@chakra-ui/react'

type CustomInputProps = {
  text: string
}

export default function CustomInput({ text }: CustomInputProps) {
  return <Input placeholder={text} bg={inputBackgroundColor} border="none" focusBorderColor={inputFocusBorderColor} />
}
