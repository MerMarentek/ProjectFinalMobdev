import React from 'react';
import { View, Text} from 'react-native';

const TextGlobal = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>              Global              </Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 0,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default TextGlobal;