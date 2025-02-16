import { View, Pressable, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = { onPress: () => void }

 const CircleButton = ({ onPress }: Props) => (
  <View style={styles.container}>
    <Pressable onPress={onPress} style={styles.container}>
      <MaterialIcons name="add" size={38} color="#253030" />
    </Pressable>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 85,
    marginHorizontal: 60,
    //borderWidth
   },
})

export default CircleButton
