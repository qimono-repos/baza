import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🙈 Say Hello to QiMono !!!</Text>
      <Link href={"/about"} style={styles.button}>
        This project is LGBTQ FOSS friendly. Link to the Repository 
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
    color:"pink"
  }
});
