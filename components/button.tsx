import { StyleSheet, View, Pressable, Text } from 'react-native'

type Props = {label: string }

const onPress = ()=> alert('button press')

const ButtonComponent = ({label}: Props)=>{return (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.pressable}  onPress={onPress}>
      <Text style={styles.textLabel}>{label}</Text>
    </Pressable>
  </View>
)}

const styles = StyleSheet.create({
  buttonContainer:{
    width:333,
    height:70,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    padding:3,
  },
  pressable:{
    borderRadius:10,
    width: '100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  icon:{
    paddingRight: 8,
  },
  textLabel:{
    color: '#fff',
    fontSize: 16,
  },
})
export default ButtonComponent
