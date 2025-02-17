import  {ImageSourcePropType, View, StyleSheet} from 'react-native' 
import {Image} from 'expo-image' 
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated' 
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

type Props = { imagesize: number, source: string }

export const EmojiSticker = ({ imagesize, source }: Props) => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

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
  const drag = Gesture
    .Pan()
    .onChange((event)=>{ translateX.value = event.changeX; translateY.value = event.changeY; })

  const containerStyle = useAnimatedStyle(()=> {
    return { transform: [{ translateX: translateX.value }, { translateY: translateY.value }] }
  })

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle,{top: -350, left: '50%'}]}>
        <GestureDetector gesture={doubleTap}>
        <Animated.Image 
          source={source as ImageSourcePropType} 
          resizeMode={'contain'}
          style={[imageStyle, { width: imagesize, height: imagesize }]} 
        />
        </GestureDetector>
      </Animated.View>    
    </GestureDetector>
  )}

// export default EmojiSticker
