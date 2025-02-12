import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function About() {
  return (
    <View style={styles.container}>

      <Link href={"https://buymeacoffee.com/kimono76"} style={styles.button}>
        Buy me a coffee 
      </Link>
      <Link href={"http://GitHub.com/qimono-repos/baza"} style={styles.button}>
        This project is LGBTQ + FOSS friendly. Link to the Code 
      </Link>

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
    margin:15,
    fontSize:10,
    fontStyle:"italic",
    textDecorationLine:"underline",
    color:"lightblue"
  }
});
