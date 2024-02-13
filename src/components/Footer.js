import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Pressable,
    Modal,
    FlatList,
    Image,
    Alert
  } from 'react-native';

const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>

            <Text style={styles.copy}>Portions of this content are 2022–2023 by individual, like Morgade Juan Pablo contributors. Content available under a Creative Commons license <Text style={styles.copy1}>©Accounting Firm Daniel Morgade & Associates</Text> </Text>

        </ScrollView>


    </SafeAreaView>
    
        
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
      backgroundColor: '#F3F4F6',
      flex: 1,
      marginBottom: 15
    },
    copy:{
        marginHorizontal: 15,
        fontSize: 13,
        fontWeight:'700',
        textAlign:'justify'

    },
    copy1:{
        fontSize: 13,
        fontWeight:'750',
        textTransform: 'uppercase',
        color: '#2B2D2D',
        textAlign:'justify'
    }
  })

export default Footer