import { View, Modal, Pressable, StyleSheet, Text } from 'react-native'
import  MaterialIcons  from '@expo/vector-icons/MaterialIcons'
import React from 'react'

type Props = { isVisible: boolean, children: React.ReactNode, onClose: () => void }

const EmojiPicker = ({ isVisible, onClose, children }: Props) => {
    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="white" />
                    </Pressable>
                </View>
            </View>
            {children} 
        </Modal>
    );
};

const styles = StyleSheet.create({
  modalContent:{
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
