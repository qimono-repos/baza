import  {ImageSourcePropType, View, StyleSheet} from 'react-native' 
import {Image} from 'expo-image' 
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated' 
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

type Props = { imagesize: number, source: string }

export const EmojiSticker = ({ imagesize, source }: Props) => {
  const scaleImage = useSharedValue(imagesize)

  const doubleTap = Gesture
    .Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value == imagesize * 2) scaleImage.value = Math.round(scaleImage.value /2)
      else scaleImage.value *= 2
      })

  const imageStyle = useAnimatedStyle(
    () => {return { width: withSpring(scaleImage.value), height: withSpring(scaleImage.value) }}
  )
  return (
    <View style={{top: -350, left: '50%'}}>
      <GestureDetector gesture={doubleTap}>
      <Animated.Image 
        source={source as ImageSourcePropType} 
        resizeMode={'contain'}
        style={[imageStyle, { width: imagesize, height: imagesize }]} 
      />
      </GestureDetector>
    </View>
  )}

// export default EmojiSticker
