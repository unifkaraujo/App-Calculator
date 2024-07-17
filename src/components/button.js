import React from 'react'
import {StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'
import Estilo from './estilo'

export default props => {

    const estilo = props.estilo || Estilo.button

    return (

        /* TouchableHighlight é um espaço onde podemos tocar */
        /* Quando clica, chama uma função que será passada por parametro */
        <TouchableHighlight onPress={() => props.onClick(props.label)} > 

            <Text style={estilo} > {props.label} </Text> 

        </TouchableHighlight>
    )
}