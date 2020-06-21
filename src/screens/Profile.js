import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
export default function ProfileScreen({navigation}) {
    return (
      <View style = {styles.container}>
        <Text>Created By:</Text>
        <Text style={styles.title}>Aditya Raj Singh</Text>
        <Text style={styles.title2}>RCC Institute of Information Technology</Text>
        <Button
          title="Back to Home"
          onPress = {() => navigation.navigate("Home")}
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
    title: {
      color: '#05375a',
      fontSize: 40,
      fontWeight: 'bold'
    },
    title2: {
      color: "tomato"
    }
})
