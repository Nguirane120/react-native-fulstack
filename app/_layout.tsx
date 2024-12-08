
import { Slot, Stack } from 'expo-router';

import "../global.css";



export default function RootLayout() {


  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}}/>
      <Stack.Screen name='(auth)' options={{headerShown:false}}/>
    </Stack>
  );
}
