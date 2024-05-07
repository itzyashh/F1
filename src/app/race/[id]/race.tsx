import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RaceRanking from '../../../../assets/data/raceRanking.json'
import RankingListItem from '../../../components/RankingListItem'

const RaceRankings = () => {
  const singleData = RaceRanking.data.raceRankings.response[0]
  const raceRankings = RaceRanking.data.raceRankings.response
  return (
    <FlatList
      data={raceRankings}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  )
}

export default RaceRankings