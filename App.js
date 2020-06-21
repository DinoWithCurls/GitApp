import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';
import Profile from './src/screens/Profile';

import { DrawerContent } from './src/screens/DrawerContent';
const Drawer = createDrawerNavigator();
import RootStackScreen from './src/screens/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';
export default function App({navigation}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setLogged] = React.useState(null);
  const detectLogIn = async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) setLogged(true);
    else setLogged(false);
  }
  React.useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
      detectLogIn();
    }, 1000);
  }, []);
  if( isLoading ) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (   
    <NavigationContainer>
      {(isLoggedIn === true) ?
      <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
          <Drawer.Screen name="Profile" component={Profile}/>
      </Drawer.Navigator> :
       <RootStackScreen /> }
    </NavigationContainer>  
  );
}
