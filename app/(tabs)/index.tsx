import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image}/>
      <Text style={styles.text}>🙈 Say Hello to QiMono !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:20,
  },
  button:{
    fontSize:20,
    textDecorationLine:'underline', 
    color:'#fff',
  },
  image:{
    width:320,
    height:440,
    borderRadius:20,
  },
})

