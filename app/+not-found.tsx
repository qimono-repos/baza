import { StyleSheet, View } from 'react-native'
import { Link, Stack } from 'expo-router'

export default function NotFoundScreen() { return (
    <>
      <Stack.Screen options={{ title:"Not Found"}}/>
      <View style={styles.container}>
        <Link href='/' style={styles.button}> Go back to Main Screen </Link>
      </View>
    </>
  )}

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
    fontSize:15,
    textDecorationLine:'underline',
    color:'#fff',
  },
});
