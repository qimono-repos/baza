import { View, Modal, Pressable, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = { IsVisible: boolean, node: React.ReactNode, OnClose: () => void }

const EmojiPicker = ({ IsVisible, node, OnClose }: Props) => {(
    <Modal visible={IsVisible} animationType="slide" transparent={true}>
      <View style={styles.modalConent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sricker</Text>
          <Pressable onPress={OnClose}>
            <MaterialIcons name="close" size={22} color="white" />
          </Pressable>
        </View>
      </View>
      {node}
    </Modal>
  )}

const styles = StyleSheet.create({
  modalConent:{
    height: '25%',
    width: '100%',
    backgroundColor: '#252525',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer:{
    height: '15%',
    backgroundColor: '#454545',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title:{
    color: 'white',
    fontSize: 20,
  },
})

export default EmojiPicker
