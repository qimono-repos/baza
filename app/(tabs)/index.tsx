import { StyleSheet, View } from 'react-native'
import ImageViewer from '@/components/imageViewer'
import ButtonComponent from '@/components/button'

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/> 
      </View>
      <View style={styles.footerContainer}> 
        <ButtonComponent label='Take a photo'/>
        <ButtonComponent label='Pick a photo  from Gallery'/>
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
