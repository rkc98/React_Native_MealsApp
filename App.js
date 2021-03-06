
import React,{useState}  from 'react';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();
const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)
  if(!fontLoaded){
    <AppLoading startAsync={fetchFonts} onFinish={()=>{
      console.log("loaddded");
      setfontLoaded(true)
    }} />
  }

  return (
<MealsNavigator />
  );
}

