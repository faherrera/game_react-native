import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native'


export default class Guiones extends Component {

    constructor(props){
        super(props)

        this.state = {
            word : this.props.word
        }

        this.getQuantityOfLetters = this.getQuantityOfLetters.bind(this);
    }

    componentDidMount() {
        this.filterLetters();
    }

    getQuantityOfLetters(){
        let quantity = this.props.word.length;
        return quantity;
    }

    filterLetters(letra = "A"){
        let diferentes = 0;

        let _letter = this.isThereThatLetter(letra); 
        if (_letter.state) {
            for (let index = 0; index < _letter.positions.length; index++) {
                console.log(`Se encuentra en la posicion ${_letter.positions[index]}`);
            }
        }else{
            console.log("No existe la letra." )
        }

    }

    isThereThatLetter(letra){

        let word = this.state.word;
        let index = 0;

        let repets = [];

        let idx = this.state.word.indexOf(letra);

        if (idx != -1) {
            while(idx != -1){
                repets.push(idx);
                idx = word.indexOf(letra, idx + 1);
            }

            return {state: true, positions: repets}
        }

        return { state: false, positions: repets }

    }

    render() {
        return (
            <View style={this.props.style}>            
                <Text style={styles.text}>
                    {this.props.word + ' ' + this.getQuantityOfLetters()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'center'}
});