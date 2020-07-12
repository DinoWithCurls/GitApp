import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
const axios = require('axios');

export default function Search() {
  const [user, setUsername] = React.useState('');  
  const [repo, setRepo] = React.useState('');
  const [option, setOption] = React.useState('');
  console.log(option);
  const GitCheck = async() => {
    console.log(option)
    let url = 'https://api.github.com/repos/'+user+'/'+repo;
    axios.get(url)
    .then(response=>{
      if(option === "open_issues") {
        alert(response.data.open_issues)  
      }
      else if(option === "subscribers_count") {
        alert(response.data.subscribers_count)
      }
      else if(option === "forks_count") {
        alert(response.data.forks_count)
      }
      else if(option === "size") {
        alert(response.data.size)
      }
      else if(option === "watchers") {
        alert(response.data.watchers)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
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
        <Text style={styles.text_foot}>What You Want</Text>
        <View>
          <Picker
           style={{ height: 50, width: 300 }} 
           selectedValue = {option}
           onValueChange={(value)=>setOption(value)}>
            <Picker.Item label="Select an option" value="0" />
            <Picker.Item label="No. of Issues" value="open_issues" />
            <Picker.Item label="No. of Subscribers" value="subscribers_count" />
            <Picker.Item label="No. of Forks" value="forks_count" />
            <Picker.Item label="Size" value="size" />
            <Picker.Item label="No. of Watchers" value="watchers" />
          </Picker>
        </View>
        <TouchableOpacity onPress = {()=>GitCheck()}
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
    boxSimple: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#000',
      padding: 10,
      margin: 20,
  },

    
})
