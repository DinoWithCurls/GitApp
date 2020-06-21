import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './HomeScreen';
import Search from './Search';
import Profile from './Profile';
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
export default function MainTabScreen() {
    return (
        <Tab.Navigator initialRouteName="Home" activeColor="white">
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="dashboard" color={color} size={23} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
              tabBarLabel: 'Search',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="find" color={color} size={23} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="idcard" color={color} size={23} />
              ),
            }}
          />         
        </Tab.Navigator>
    );
}
const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: '#009387',
      },
      headerTintColor: 'gold',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
       options={{headerLeft: ()=> (
         <Icon.Button name="database" size={30}
          backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}></Icon.Button>
       )}}
       />
  </HomeStack.Navigator>
    );
}
const SearchStackScreen = ({navigation}) => {
    return(
      <SearchStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: '#009387',
      },
      headerTintColor: 'gold',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <SearchStack.Screen name="Search" component={Search}
      options={{headerLeft: ()=> (
        <Icon.Button name="database" size={30}
         backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}></Icon.Button>
      )}}
      />
    </SearchStack.Navigator>  
    );
}
const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator screenOptions={{
    headerStyle: {
        backgroundColor: '#009387',
    },
    headerTintColor: 'gold',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={Profile}
    options={{headerLeft: ()=> (
      <Icon.Button name="database" size={30}
       backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}></Icon.Button>
    )}}
    />
  </ProfileStack.Navigator>  
  );
}