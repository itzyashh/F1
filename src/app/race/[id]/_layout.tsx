import { Stack, Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import color from "../../../../assets/color";

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);
export default function RaceLayout () {
    return (
    <>
    <Stack.Screen  options={{ title: 'Race Details',headerBackTitleVisible:false }}  />
    <TopTabs

    screenOptions={{
        tabBarLabelStyle:{
            textTransform:'uppercase',

            fontWeight:'bold'
        },
        tabBarStyle:{
            backgroundColor:color.primary,
        },        
        tabBarActiveTintColor:'#fff',
        tabBarInactiveTintColor:'gainsboro',
        tabBarIndicatorStyle:{
            backgroundColor:'#fff',
            height:3
        }
        
    }}
    >
        <TopTabs.Screen name="index" options={{ title: 'Details' }}  />
        </TopTabs>
    </>

    )
}