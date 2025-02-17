import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout() {
    return (
      <Tabs 
        screenOptions={{ 
          tabBarActiveTintColor: '#ffd33d',
          headerStyle: {backgroundColor: "#253030"},
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: { backgroundColor: '#253030'}
        }} >
          <Tabs.Screen name='index' options={{ 
              headerTitle:'BAZA APP',
              tabBarIcon: ({focused, color})=> <Ionicons 
                name={ focused ? 'tv-sharp' : 'tv-outline'} 
                color={color}
                size={30}/>,
            }} />
          <Tabs.Screen name="about" options={{ 
              headerTitle:"About QiMono (v.1.3.0)", 
              tabBarIcon: ({focused, color})=> <Ionicons 
                name={ focused ? 'information-circle-sharp' : 'information-circle-outline'} 
                color={color}
                size={30}/>,
            }}/>
      </Tabs>
)}
