import { StyleSheet, Text, View } from 'react-native'

export function Score({ points }: { points: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>Your score: {points}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'flex-end' },
  value: {
    fontSize: 32,
  },
})
