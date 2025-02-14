import { StyleSheet, View } from 'react-native'
import ImageViewer from '@/components/imageViewer'
import ButtonComponent from '@/components/button'
import * as ImagePicker from 'expo-image-picker'

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {

  const pickImageAsync = async () => {
    let result:any = await ImagePicker.launchImageLibraryAsync({
      quality:1,
      allowsEditing: true,
    })
    if (!result.cancelled) {
      console.log(result)
    } else { alert('No image selected') } 
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/> 
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
