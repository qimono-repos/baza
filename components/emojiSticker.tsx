import  {View} from 'react-native' 
import {Image} from 'expo-image' 

type Props = { imagesize: number, source: string }

export const EmojiSticker = ({ imagesize, source }: Props) => {
  return (
    <View style={{top: -350}}>
      <Image style={{ width: imagesize, height: imagesize }} source={source} />
    </View>
  )}

// export default EmojiSticker
