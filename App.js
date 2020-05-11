import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextGlobal from './components/TextGlobal';
import HeaderCovid from './components/HeaderCovid';
import TextIndonesia from './components/TextIndonesia';
import Global from './components/Global';
import Indonesia from './components/Indonesia';


const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.boxHeaderCovid}>
        <HeaderCovid/>
    </View>
    <View style={styles.boxGlobal}>
        <TextGlobal/>
        <Global/>
    </View>
   <View style={styles.boxIndonesia}>
        <TextIndonesia/>
        <Indonesia/>
   </View>
  </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeaderCovid: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxGlobal: {
      flex: 5,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxIndonesia: {
      flex:12
  }
})

export default App;