import {StyleSheet} from 'react-native';


const colorContainer = '#bbdefb';
const colorImage = "#b3e5fc";
const colorGuiones = "#ffcdd2";
const colorBotones = '#78909c';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorContainer
    },
    image: {
        flex: 5,
        backgroundColor: colorImage
    },
    guiones: {
        flex: 1,
        backgroundColor: colorGuiones,
        justifyContent:'center',
    },
    botones: {
        flex: 3,
        backgroundColor: colorBotones,
        alignItems:'center',
        justifyContent:'center',

        // height:'100%'
    },
});