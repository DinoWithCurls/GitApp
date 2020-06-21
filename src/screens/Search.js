import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Search({navigation}) {
  const [user, setUsername] = React.useState('');  
  const [repo, setRepo] = React.useState('');
  return (
      <View style = {styles.container}>
        <View style = {styles.titlecontaier}>
          <Text style = {styles.title}>Search for Shit here</Text>
        </View>
        <Text style={styles.text_foot}>GitHub Username</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="User Name"
            style={styles.textInput}
            autoCapitalize="none"
            value={user}
            onChangeText={(val)=>setUsername(val)} />
        </View>
        <Text style={styles.text_foot}>Repository Name</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Repository"
            style={styles.textInput}
            autoCapitalize="none"
            value={repo}
            onChangeText={(val)=>setRepo(val)} />
        </View>
        <TouchableOpacity
          style={[styles.signIn, {borderColor: "#009387", borderWidth: 1, marginTop:15}]}>
            <Text style={[styles.textSign, {color:'tomato'}]}>SEARCH</Text>
        </TouchableOpacity>        
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
      fontWeight: 'bold',
      marginTop: 20
    },
    titlecontainer: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent:"center",
      backgroundColor: "white"
    },
    text_foot: {
      color: '#05375a',
      fontSize: 18
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
    },
    textInput: {
      flex: 1,
      marginTop: -12, 
      paddingLeft: 10,
      color: '#05375a',
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold'
    },


    
})
