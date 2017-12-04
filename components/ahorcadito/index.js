import React, { Component } from 'react';
//UI
import {
    View,
    StyleSheet,
    Text
}from 'react-native'

//Components 
import Imagen from './imagen/';
import Guiones from './guiones/';
import Botones from './botones/';

//Assets
import {styles} from './assets/styles';

export default class Ahorcadito extends Component {

    constructor(){
        super();
        this.state = {
            buttons: this.showAllLetters(),
            wordToKnow: this.getRandomWord() 
        };
    }

    showAllLetters() {

        const LETTERS = [    //Aquí indico todas las letras
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",

        ];

        return LETTERS.map(l => ({ l, state: 'no-pulsado'}) );  //Devolviendo la letra y su estado.
    }

    getRandomWord(){

        const WORDS = [
            "ARGENTINA",
            "BRASIL",
            "CHILE",
            "URUGUAY",
            "PARAGUAY",
            "BOLIVIA",
            "PERU",
            "COLOMBIA",
            "VENEZUELA",
            "ECUADOR",
        ]

        return WORDS[Math.floor(Math.random() * WORDS.length)];
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Imagen 
                    style={styles.image}
                    try={3}
                />
                <Guiones
                    style={styles.guiones}
                    word={this.state.wordToKnow}

                />
                <Botones
                    style={styles.botones}
                    keyword={this.state.buttons}
                />
            </View>
        );
    }
}

