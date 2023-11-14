import { Text, TouchableOpacity, View } from 'react-native'

import React, { useState, useEffect } from 'react'

export const CountdownTimer = ({
  gameStarted,
  gameStoped,
}: {
  gameStarted: boolean
  gameStoped?: boolean
}) => {
  const [seconds, setSeconds] = useState(300) // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: any

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive])

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setSeconds(300)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`
  }

  return (
    <View>
      <View>
        <Text>{formatTime(seconds)}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={toggleTimer}>
          <Text>{isActive ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTimer}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
