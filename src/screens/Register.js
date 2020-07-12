import React from 'react';

import {View, Text, Button, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
const Register = ({navigation}) => {
    let token = "something"
    const [dat, setDat] = React.useState({
            secureTextEntry: true,
            confirm_secureTextEntry: true
    });
    const [email, setEmail]=React.useState('');
    const [password, setPassword]=React.useState('');
    const [passwordCheck, setPasswordCheck]=React.useState('');
    const updateSTE = () => {
        setDat({
            ...dat,
            secureTextEntry: !dat.secureTextEntry
        });
    };
    const updateConfirmSTE = () => {
        setDat({
            ...dat,
            confirm_secureTextEntry: !dat.confirm_secureTextEntry
        });
    };
    const RegnHandle = async(email, password, passwordCheck) => {
        fetch("http://localhost:5000/users/register", {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                "email":email, "password":password, "passwordCheck":passwordCheck})
        }).then(res=>res.json())
            .then(async ()=>{
                try {
                    await AsyncStorage.setItem('token', token);
                    navigation.navigate('HomeDrawer')
                }catch(e){
                    console.log(e);
                }
            })
    }    
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor="gold" />
            <View style={styles.header}>
                <Animatable.Text style={styles.text_head} animation="zoomIn">Register</Animatable.Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_foot}>E-Mail</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your EMail"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value = {email}
                        onChangeText={(val)=>setEmail(val)} />    
                </View>
                <Text style={[styles.text_foot, {marginTop: 35}]}>Enter Your Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={dat.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(val)=> setPassword(val)} />
                    <TouchableOpacity onPress={()=>updateConfirmSTE()}>
                        {dat.secureTextEntry ?
                        <Feather 
                            name="eye-off"
                            colour="grey"
                            size={20}
                        /> :
                        <Feather 
                        name="eye"
                        colour="grey"
                        size={20}
                        /> }
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_foot, {marginTop: 35}]}>Confirm Your Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        value={passwordCheck}
                        secureTextEntry={dat.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> setPasswordCheck(val)} />
                    <TouchableOpacity onPress={()=>updateSTE()}>
                        {dat.secureTextEntry ?
                        <Feather 
                            name="eye-off"
                            colour="grey"
                            size={20}
                        /> :
                        <Feather 
                        name="eye"
                        colour="grey"
                        size={20}
                        /> }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=> RegnHandle()}>
                    <View style={styles.button}>
                        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                            <Text style={[styles.textSign, {color: 'gold'}]}>REGISTER</Text>
                        </LinearGradient>            
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
                 style={[styles.signIn, {
                     borderColor: '#009387', borderWidth: 1, marginTop: 15}]}>
                    <Text style={[styles.textSign, {color: 'tomato'}]}>LOGIN</Text>
                </TouchableOpacity>                
            </Animatable.View>
        </View>
    );
};
export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gold'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text_head: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 30
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
    button: {
        alignItems: 'center',
        marginTop: 50
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
    text: {
        color: 'grey',
        marginTop:35,
        fontSize: 20
    }
});