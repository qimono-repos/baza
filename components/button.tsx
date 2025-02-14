import { StyleSheet, View, Pressable, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type Props = {label: string , theme?: 'primary', onPress?: ()=>void}

const ButtonComponent = ({label, theme, onPress}: Props)=>{
  if(theme === 'primary') return (
  <View style={[styles.buttonContainer, primarybuttonContainer]}> 
    <Pressable style={[styles.pressable, {backgroundColor: '#8e8ea4'}]}  onPress={onPress}>
      <FontAwesome name="picture-o" size={18} color="#252525" style={styles.icon}/>
      <Text style={[styles.textLabel,{color:'#252525'}]}>{label}</Text>
    </Pressable>  
  </View>
  ) 
  return (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.pressable}  onPress={onPress}>
      <Text style={styles.textLabel}>{label}</Text>
    </Pressable>
  </View>
)}

const primarybuttonContainer = {  borderWidth: 4, borderColor:'#324054', borderRadius: 25 }
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
    borderRadius:20,
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
