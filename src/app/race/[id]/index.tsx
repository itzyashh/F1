import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const raceDetails = () => {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>raceDetails {id}</Text>
    </View>
  )
}

export default raceDetails