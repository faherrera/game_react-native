import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import {IMAGES} from './imageArray';

export default class Imagen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={this.props.style}>            
                <Image 
                    style={styles.image}
                    source={IMAGES[(this.props.try)]}   //Array con las imagenes, la posición será pasada dede la prop.
                />
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        width: '100%',
        // height:undefined,
        resizeMode:'stretch'
    }
});