import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { words } from '../../constants'
import { Input } from '../components/Input'
import { WordsBlock } from '../components/WordsBlock'

export function Home() {
  const [typedWord, setTypedWord] = useState<string>('')
  const [pastRightWords, setPastRightWords] = useState<string[]>([])

  function verifyWord() {
    if (words.includes(typedWord.toLowerCase())) {
      setTypedWord('')
      const newWords = [...pastRightWords, typedWord]
      setPastRightWords(newWords)
      return
    }
  }

  function resetWords() {
    setPastRightWords([])
  }

  useEffect(() => {
    verifyWord()
  }, [typedWord])

  return (
    <View style={styles.container}>
      <Input typedWord={typedWord} setTypedWord={setTypedWord} />
      <WordsBlock pastRightWords={pastRightWords} />
      <TouchableOpacity style={styles.resetButton} onPress={resetWords}>
        <Text>Reset game</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  resetButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ff9900',
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
})
