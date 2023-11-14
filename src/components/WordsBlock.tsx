import { StyleSheet, View, Text } from 'react-native'
import { words } from '../../constants'

export function WordsBlock({ pastRightWords }: { pastRightWords: string[] }) {
  // check if one of my w is on pastRW
  // yes: show
  // not hide
  return (
    <View style={styles.container}>
      {words.map((word) => {
        const index = pastRightWords.findIndex(
          (currentWord) => word === currentWord
        )

        return (
          <View style={styles.word} key={word}>
            <Text>{word === pastRightWords[index] ? word : '******'}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  word: {
    width: '100%',
    backgroundColor: '#ff7b00',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
})
