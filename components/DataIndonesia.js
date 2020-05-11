// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// class DataIndonesia extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             summary: [],
//             positive: '',
//             meninggal: '',
//             sembuh: '',
//             perawatan : '',
//         }
//     }

    // componentDidMount = () => {
        // this.getDataApi();
    // }

    // getDataApi = async () => {
    //     const response = await fetch('https://kawalcovid19.harippe.id/api/summary');
    //     const json = await response.json();
    //     this.setState({positive: json.confirmed.value})
    //     this.setState({sembuh: json.recovered.value})
    //     this.setState({meninggal: json.deaths.value})
    //     this.setState({perawatan: json.activeCare.value})
    // }
   
    // render(){
    //     return (
    //                <View style={styles.container}>
    //                <View style={styles.box1}>
    //                    <Text style={styles.text}> Positif {this.state.positive}</Text>
    //                </View>
    //                <View style={styles.box2}>
    //                    <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
    //                </View>
    //                <View style={styles.box3}>
    //                <Text style={styles.text}> Meninggal {this.state.meninggal}</Text>
    //                </View>
    //                <View style={styles.box4}>
    //                <Text style={styles.text}> Perawatan {this.state.perawatan}</Text>
    //                </View>
    //            </View>
    //     )
    // }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         position: 'relative'
    // },
    // box1: {
    //     width: 100,
    //     height: 90,
    //     backgroundColor: 'yellow'
    // },
    // box2: {
    //     width: 100,
    //     height: 90,
    //     backgroundColor: 'lime'
    // },
    // box3: {
    //     width: 100,
    //     height: 90,
    //     backgroundColor: 'red'
    // },
    // box4: {
    //     width: 100,
    //     height: 90,
    //     backgroundColor: 'brown'
    // },
    // text: {
    //     color: 'black',
    //     fontSize: 20,
    //     fontWeight: 'bold'
    // }
// })


// export default DataIndonesia;