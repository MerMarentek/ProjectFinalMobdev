import React from 'react';
import { View, Text } from 'react-native';

const TextIndonesia = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>Indonesia</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 0,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default TextIndonesia;