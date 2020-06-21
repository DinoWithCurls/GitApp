import React from 'react';
import {View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';


export function DrawerContent(props) {
    const logOut = async() => {
        await AsyncStorage.removeItem('token');
    }
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>   
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Text label='WC'
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection: 'column'}}>
                                <Title style={styles.title}>WallCrawler</Title>
                                <Caption style={styles.caption}>@adityarajsingh64</Caption>    
                            </View>    
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="dashboard"
                                    color={color}
                                    size={size}
                                    />
                                )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />      
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="idcard"
                                    color={color}
                                    size={size}
                                    />
                                )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />      
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="find"
                                    color={color}
                                    size={size}
                                    />
                                )}
                            label="Search"
                            onPress={() => {props.navigation.navigate('Search')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="poweroff"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Log Out"
                    onPress={() => {logOut()}}
                />      
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
});
