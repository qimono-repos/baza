import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{
        headerTitle:"BAZA APP",
        headerLeft:()=><></>,
      }} />
    <Stack.Screen name="about" options={{
        headerTitle:"About:Open Source Repository",
      }}/>
  </Stack>
  )}
