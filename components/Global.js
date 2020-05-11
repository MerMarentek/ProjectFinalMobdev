import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Global extends React.Component{
    constructor(){
        super();
        this.state = {
            api: [],
            positive: '',
            meninggal: '',
            sembuh: '',
        }
        
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({positive: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
    }
   
    render(){
        return (
     <View style={styles.container}>
     <View style={styles.boxPositifG}>
        <Text style={styles.text}> Positif {this.state.positive}</Text>
    </View>
     <View style={styles.boxSembuhG}>
        <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
     </View>
     <View style={styles.boxMeninggalG}>
        <Text style={styles.text}> Meninggal {this.state.meninggal}</Text>
     </View>
     </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    boxPositifG: {
        width: 100,
        height: 90,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        marginHorizontal: 10, height: 90, width: 100, 
        backgroundColor: 'gold'
    },
    boxSembuhG: {
        width: 100,
        height: 90,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        marginHorizontal: 10, height: 90, width: 100, 
        backgroundColor: 'mediumspringgreen'
    },
    boxMeninggalG: {
        width: 100,
        height: 90,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        marginHorizontal: 10, height: 90, width: 100, 
        backgroundColor: 'tomato'
        
    },
    text: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold'
        
    }
})


export default Global;