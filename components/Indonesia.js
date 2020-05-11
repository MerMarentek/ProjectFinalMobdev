import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';


class Indonesia extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.boxProvinsi}>
          <Text>{item.provinsi}</Text>
          </View>
      <View style={styles.boxPositif}>
          <Text>{item.kasusPosi}</Text>
          </View>
      <View style={styles.boxSembuh}>
          <Text>{item.kasusSemb}</Text>
          </View>
      <View style={styles.boxMeninggal}>
          <Text>{item.kasusMeni}</Text>
          </View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataApi();
}

componentDidMount = () =>{
    this.getDataApi();
}

getDataApi = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  const { data } = await DataIndo
  this.setState({
      DataIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.DataIndo) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
          <View style={styles.indoContainer}>
          </View>
          <View>
            <FlatList 
                data={this.state.DataIndo.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default Indonesia;

const styles = StyleSheet.create({
  returnContainer: {
    flex: 1,
    flexDirection:'row',
    padding:10,
    borderWidth:1,
    backgroundColor: '#EBEBEB',
  },
  container: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    backgroundColor: 'snow',
  },
  indoContainer:{
    flexDirection:'row',
    borderRadius:15,
    marginTop:20,
    marginBottom:15
  },
  text:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:28,
    marginTop:50,
    alignItems:'center', 
    fontFamily:'sans-serif-light'
  },

  boxProvinsi:{
    width:90,
    marginBottom:7,
    height:20
  },
  boxPositif:{
    width: 65,
    height: 20,
    alignSelf: 'center',
    marginLeft:10,
    marginBottom:7,
    borderRadius:20,
    paddingLeft: 17,
    backgroundColor:'gold'
  },
  boxSembuh:{
    width:65,
    height:20,
    alignSelf: 'center',
    marginLeft:10,
    marginBottom:7,
    borderRadius:20,
    paddingLeft: 17,
    backgroundColor:'mediumspringgreen'
  },
  boxMeninggal:{
    width:65,
    height:20,
    alignSelf: 'center',
    marginLeft:20,
    marginBottom:10,
    borderRadius:20,
    paddingLeft: 17,
    backgroundColor:'tomato'
  },

  name:{
    fontSize:20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: 'center',
    justifyContent: 'space-between',
    margin:30
},
})

 