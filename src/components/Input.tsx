import { Dispatch, SetStateAction } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

interface IInputProps {
  typedWord: string
  setTypedWord: Dispatch<SetStateAction<string>>
}

export function Input({ typedWord, setTypedWord }: IInputProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={typedWord}
        onChangeText={setTypedWord}
        placeholder="Type any tech brand name"
        autoCapitalize="none"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
})
