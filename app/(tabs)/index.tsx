import { StyleSheet, View , Text} from 'react-native'
import ImageViewer from '@/components/imageViewer'
import ButtonComponent from '@/components/button'
import CircleButton from '@/components/circleButton' 
import EmojiPicker from '@/components/emojiPicker' 
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  
  const pickImageAsync = async () => {
    let result:any = await ImagePicker.launchImageLibraryAsync({
      quality:1,
      allowsEditing: true,
    })
    if (!result.cancelled) {
      console.log(result)
      setSelectedImage(result.assets[0].uri)
    }
    else { alert('No image selected') } 
  }

  const onReset = () => setShowAppOptions(false)

  const onModalClose = () => setIsModalVisible(false)

  const onAddSticker = () => setIsModalVisible(true)

  const onSaveImageAsync = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage}/> 
      </View>
      {showAppOptions? (
        <CircleButton onPress={onAddSticker}/>
      ):
      <View style={styles.footerContainer}> 
        <ButtonComponent label='Choose a photo from Gallery' theme='primary' onPress={pickImageAsync}/>
        <ButtonComponent label='Use this photo' onPress={()=> setShowAppOptions(true)}/>
      </View>
    }
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        <Text>Emoji picker</Text>
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253030',
    alignItems: 'center',
  },
  imageContainer: { 
    flex: 1,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems:'center',
  }
})

// sample pick image result
const resultNotCancelled = {
  "assets": 
  [
    {
      "assetId": null, 
      "base64": null, 
      "duration": null, 
      "exif": null, 
      "fileName": null, 
      "fileSize": 532961, 
      "height": 828, 
      "mimeType": "image/jpeg", 
      "pairedVideoAsset": null, 
      "type": "image", 
      "uri": "file:///var/mobile/Containers/Data/Application/A1F92CD1-CEAA-4F99-8B70-1E7A95FCCBAF/Library/Caches/ExponentExperienceData/"+
      "anonymous/basic-120d6a41-4793-43a2-b186-6f28a0d349d0/ImagePicker/F52E6B16-A5C0-484C-8E2D-A0ACCF4B859B.jpg", 
      "width": 834
    }
  ], 
  "canceled": false
}

const resultCancelled = {
  "assets": null, 
  "canceled": true
}


