
import { FlatList, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import racesResponse from '../../assets/data/races.json'
import RaceListItem from '../components/RaceListItem';
import { Link } from 'expo-router';
import { useQuery, gql } from '@apollo/client';


const query = gql`query MyQuery ($competition: String, $season: String) {
  races(competition: $competition, season: $season) {
    response {
      circuit {
        id
        image
        name
      }
      competition {
        id
        name
        location {
          city
          country
        }
      }
      date
      distance
      fastest_lap {
        driver {
          id
        }
        time
      }
      id
      season
    }
  }
}`

export default function App() {
  const { loading, error, data } = useQuery(query,{
    variables: {competition: '1', season: '2024'}
  
  })

  if (loading) return <ActivityIndicator />

  if (error) return <Text>Error: {error.message}</Text>

  // if (data) console.log('API data:', data.races.response)

  //   console.log('Local data:', racesResponse.data.races.response)

  // const races = racesResponse.data.races.response
  const races = data.races.response
  return (
    <View style={styles.container}>
      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },

});
