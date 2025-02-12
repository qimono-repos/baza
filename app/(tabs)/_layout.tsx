import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
      <Tabs>
          <Tabs.Screen name="index" options={{ headerTitle:"BAZA APP",}} />
          <Tabs.Screen name="about" options={{ headerTitle:"About:Open Source Repository", }}/>
      </Tabs>
)}
