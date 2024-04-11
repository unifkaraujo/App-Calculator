import React from 'react'
import {StyleSheet, Text, View } from 'react-native'


export default props => {

    return (

        <View style={style.display}> 
        
            <Text style={style.displayValue} > {props.value} </Text>
            
        </View>

    )
}

const style = StyleSheet.create( {
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.6)",
        alignItems: 'flex-end'
    },

    displayValue: {
        fontSize: 60,
        color: '#fff',
    }

})