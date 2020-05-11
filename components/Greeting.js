import React from 'react';
import { View, Text, Image} from 'react-native';

const Greeting = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>              Global              </Text>
            {/* <Image
                source={{ uri: 'https://publicdomainvectors.org/photos/LowDetailGlobe.png'}}
                style={{ width: 50, height: 50, flex: 1, flexDirection: 'row'}}
            /> */}
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'center',
        height: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 0,
        // position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Greeting;