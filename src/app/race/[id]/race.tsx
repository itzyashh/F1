import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import RaceRanking from '../../../../assets/data/raceRanking.json'
import RankingListItem from '../../../components/RankingListItem'
import { useQuery, gql } from '@apollo/client';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';


const query = gql`query MyQuery($id: Int) {
  raceRankings(race: $id) {
    get
    results
    response {
      driver {
        abbr
        id
        image
        name
        number
      }
      gap
      grid
      laps
      pits
      position
      race {
        id
      }
      team {
        id
      }
      time
    }
  }
}`

const RaceRankings = () => {

  const { id } = useGlobalSearchParams()
  console.log('id:', id)

  const { loading, error, data } = useQuery(query, {
    variables: { id: id },
  });

  if (loading) return <ActivityIndicator />
  if (error) return <Text>Error :(</Text>

  console.log('data:', data)


  const raceRankings = data.raceRankings.response
  return (
    <FlatList
      data={raceRankings}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  )
}

export default RaceRankings