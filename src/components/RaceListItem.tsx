import { Entypo } from '@expo/vector-icons';

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import racesResponse from '../../assets/data/races.json'
import color from '../../assets/color';
import { Link } from 'expo-router';
const races = racesResponse.data.races.response

const RaceListItem = ({item}:{item : (typeof races[0])}) => {
    const date = new Date(item.date)
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.getMonth().toString().padStart(2, '0')

    return (
      <Link href={`/race/${item.id}`} asChild>
      <Pressable style={styles.itemContainer}>
        <View style={styles.contentContainer}>
        <View>

        <Text style={styles.date}>{`${day}-${month}`}</Text>
        <Text style={styles.month}>NOV</Text>
        </View>
        <View style={styles.line} />
        <View>
        <Text style={styles.country}>{item.competition?.location?.country}</Text>

        <Text style={styles.name}>Formula 1 {item?.competition?.name}</Text>
        </View>
        </View>
        <Entypo name="chevron-right" size={24} color={color.primary} />
      </Pressable>
      </Link>
    )
  }

  export default RaceListItem

  const styles = StyleSheet.create({

  contentContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  itemContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  line:{
    height: 50,
    width: 1,
    backgroundColor: 'grey',
    // marginHorizontal: 10,
  },
 
  country:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  date:{
  },
  month:{
  },
  name:{
    color:'dimgray',
  }
})