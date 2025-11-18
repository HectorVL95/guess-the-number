import { View, Text, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewContext } from 'app/context/view-context';
import { ViewProvider } from 'app/context/view-context';
import ViewSwitch from 'app/switches/view-switch';

import './global.css';

export default function App() {
  return (
      <LinearGradient colors={["#9c200fff", "#828a16ff"]} className='flex-1'>
        <ImageBackground imageStyle={{opacity: 0.2}} className='flex-1' source={require('assets/dices.jpg')}>
            <SafeAreaView className='absolute jusify-center items-center w-full h-full pt-4'>
              <ViewProvider>
                <ViewSwitch />
              </ViewProvider>
            </SafeAreaView >
        </ImageBackground>
      </LinearGradient>
  );
}
