import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import raceResponse from '../../../../assets/data/races.json'
import { useQuery, gql } from '@apollo/client';
const query = gql`query MyQuery ($id: Int) {
  races(id: $id) {
    get
    results
    response {
      circuit {
        id
        image
        name
      }
      competition {
        id
        location {
          city
          country
        }
        name
      }
      date
      distance
      fastest_lap {
        time
        driver {
          id
        }
      }
      id
      laps {
        current
        total
      }
      season
      status
      timezone
      type
      weather
    }
    errors
  }
}`
const raceDetails = () => {
  const {id} = useLocalSearchParams()


  const { loading, error, data } = useQuery(query,{
    variables: {id:id}
  })

  if (loading) return <ActivityIndicator />
  if (error) return <Text>Error: {error.message}</Text>

  
  const detail = data.races.response[0]
  console.log('data:', detail)

  const race = raceResponse.data.races.response[0]
  return (
    <View>
      

      <Text>{detail.competition.name}</Text>
      <Text>{detail.circuit.name}</Text>
      <Image source={{uri:detail.circuit.image}} style={{width: '100%', height: 200}} />
    </View>
  )
}

export default raceDetails