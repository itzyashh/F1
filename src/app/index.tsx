
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import racesResponse from '../../assets/data/races.json'
import RaceListItem from '../components/RaceListItem';



export default function App() {

  const races = racesResponse.data.races.response
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },

});
