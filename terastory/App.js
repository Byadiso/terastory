import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SettingsScreen from './screens/ChatSettingsScreen';
import ChatSettingsScreen from './screens/SettingsScreen';
import ChatListScreen from  './screens/ChatListScreen';




SplashScreen.preventAutoHideAsync();
const Stack= createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator= ()=>{
  return (
    <Tab.Navigator
    screenOptions={{headerTitle: " "}}>
      <Tab.Screen name="ChatList" component={ChatListScreen} options={{
        tabBarLabel: "Chats"
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: "Settings"
      }} />
    </Tab.Navigator>
  )
}



export default function App() {
  const [appIsloaded, setAppIsLoaded]=useState(false);


  useEffect(()=>{

    const prepare= ()=>{

    };
    prepare();
  },[])

  const OnLayout=useCallback(async()=>{
    if(appIsloaded){
      await SplashScreen.hideAsync();
    }
  },[appIsloaded]);
   
  if(!appIsloaded){
    return null;
  }

  return (
    <SafeAreaProvider 
    style={styles.container}
    OnLayout={OnLayout}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNavigator} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="ChatSettings" component={ChatSettingsScreen} options={{
            headerTitle: "Settings",
            headerBackTitle: "back"
          }} />
          
        </Stack.Navigator>     

      </NavigationContainer>      

    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
