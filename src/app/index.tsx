
import { FlatList, View, StyleSheet } from 'react-native';
import racesResponse from '../../assets/data/races.json'
import RaceListItem from '../components/RaceListItem';
import { Link } from 'expo-router';



export default function App() {
  console.log('App')
  const races = racesResponse.data.races.response
  return (
    <View style={styles.container}>
      <Link href={'/about'}>About</Link>
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
