import React from 'react'
import {StyleSheet, Text, View } from 'react-native'


export default props => {

    return (

        <View style={style.display}> 
        
            <Text style={style.displayValue}> Criado por: Kaique </Text>
            
        </View>

    )
}

const style = StyleSheet.create( {
    display: {
        padding: 5,
        backgroundColor: "rgba(0,0,0,0.6)",
    },

    displayValue: {
        fontSize: 12,
        color: '#fff',
    }

})