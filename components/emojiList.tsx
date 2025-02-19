import { useState } from 'react'
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native'
import { Image } from 'expo-image'
import axios from 'axios'

type Props = { onSelect: (emoji: string) => void , onClose: () => void }

const EmojiList = ({ onSelect, onClose }: Props) => {
  const [ emoji ] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
    ])


    //const [emoji, setEmoji] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchEmojis = async () => {
    //         try {
    //             const response = await axios.get('http://your-api-url.com/api/emojis'); // Replace with your .NET API URL
    //             setEmoji(response.data); // Assuming the response is an array of image URLs
    //         } catch (err) {
    //             setError('Failed to load emojis');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchEmojis();
    // }, []);


  return (
    <FlatList 
      horizontal
      showsVerticalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item, index}) =>(
        <Pressable onPress={ ()=>{ onSelect(item); onClose(); }}>
          <Image source={item} key={index} style={styles.image}/>
        </Pressable>
      )}
    />
  )}

const styles = StyleSheet.create({
  contentContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: '145%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100, 
    height: 100,
    marginRight: 20,
  },
})

export default EmojiList


// const EmojiPicker = ({ isVisible, onClose, children }: Props) => {

//     return (
//         <Modal visible={isVisible} animationType="slide" transparent={true}>
//             <View style={styles.modalContent}>
//                 <View style={styles.titleContainer}>
//                     <Text style={styles.title}>Choose a sticker</Text>
//                     <Pressable onPress={onClose}>
//                         <MaterialIcons name="close" size={22} color="white" />
//                     </Pressable>
//                 </View>
//             </View>
//             {children} 
//         </Modal>
//     )}
