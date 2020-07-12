import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
export default function HomeScreen({navigation}) {
    return (
      <View style = {styles.container}>
        <Text>Welcome</Text>
        <Button 
          title="Go to the next page"
          onPress = {() => navigation.navigate("Search")}
          />
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white"
    },
})
  