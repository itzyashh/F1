import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import raceResponse from '../../../../assets/data/races.json'

const raceDetails = () => {
  const {id} = useLocalSearchParams()
  const race = raceResponse.data.races.response[0]
  return (
    <View>
      

      <Text>{race.competition.name}</Text>
      <Text>{race.circuit.name}</Text>
      <Image source={{uri:race.circuit.image}} style={{width: '100%', height: 200}} />
    </View>
  )
}

export default raceDetails