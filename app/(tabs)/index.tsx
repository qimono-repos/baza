import { StyleSheet, View } from 'react-native'
import ImageViewer from '@/components/imageViewer'
import ButtonComponent from '@/components/button'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined)
  
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

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage}/> 
      </View>
      <View style={styles.footerContainer}> 
        <ButtonComponent label='Choose a photo from Gallery' theme='primary' onPress={pickImageAsync}/>
        <ButtonComponent label='Use this photo'/>
      </View>
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


