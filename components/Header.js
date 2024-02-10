import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My toDos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        backgroundColor: 'coral',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    title:{
    
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default Header
