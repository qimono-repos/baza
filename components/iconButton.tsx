import { Pressable, StyleSheet, Text} from 'react-native'
import MaterialIcons  from '@expo/vector-icons/MaterialIcons'

type Props = { 
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
}

const IconButton = ({ icon, label, onPress }: Props) => (
  <Pressable onPress={onPress} style={styles.pressable}>
    <MaterialIcons name={icon} size={24} color="#fff" />
    <Text style={styles.label}>{label}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  pressable:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    marginTop: 12,
  },
})

export default IconButton
