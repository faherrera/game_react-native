import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'


export default class Botones extends Component {
    constructor(props){
        super(props)
    }

    getButtons(){
        return this.props.keyword.map(
            (value, i) => 
                <TouchableHighlight 
                    onPress={()=> console.log(`Presionando el boton ${value.l}`)}
                    key={i} 
                    style={styles.btnSinPulsar}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.text}>
                            {value.l}
                        </Text>
                    </View>
                </TouchableHighlight>
            )
    }
    render() {
        return (
            <View style={[this.props.style]}>
                <View style={styles.contenedor}>       
                    {this.getButtons()}
                </View>       
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnPulsado:{
        backgroundColor:'red'
    },
    btnSinPulsar:{
        backgroundColor: '#607d8b',
        width:30,
        height:30,
        margin:5,
    },
    text:{
        fontSize:20,
        color:'white',
        padding: 5

    },
    contenedor:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }
});