import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import RaceRankings from '../../assets/data/raceRanking.json';

interface RankingListItemProps {
    item: typeof RaceRankings.data.raceRankings.response[0]
}

const RankingListItem = ({ item }: RankingListItemProps) => {
    console.log(item)
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <Text style={styles.position}>{item.position}</Text>
                <View style={styles.driveDetails}>
                    <Image source={{uri: item.driver.image}} style={{width: 50, height: 50, borderRadius: 50}} />
                <Text style={styles.driverName}>
                    {item.driver.name}
                </Text>
                </View>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
    )
}

export default RankingListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    driveDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    position: {
        // Add your position text styles here
        marginLeft: 10,
        fontWeight: 'bold',
        width: 30,
        fontSize: 20
    },
    driverName: {
        // Add your driver name text styles here
        fontWeight: 'bold'

    },
    timeContainer: {
        backgroundColor: 'lightgrey',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        marginRight: 10,
    },
    time: {
    }
})