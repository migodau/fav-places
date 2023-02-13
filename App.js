import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from './components/UI/IconButton';
import { AddPlace } from './screens/AddPlace';
import { AllPlaces } from './screens/AllPlaces';
import { Map } from './screens/Map';
import { Colors } from './theme/colors';
import { init } from './utils/database';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ready, SetReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    init()
    .then(() => SetReady(true))
    .catch(error => console.log(error));
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark"/>
      <View onLayout={onLayoutRootView}></View>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
        }}>
          <Stack.Screen name="AllPlaces" component={AllPlaces} 
          options={({navigation}) => ({
            title: 'All Places',
            headerRight: ({tintColor}) => 
              <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')} />
          })}/>
          <Stack.Screen name="AddPlace" component={AddPlace} options={{title: 'Add New Place',}}/>
          <Stack.Screen name="Map" component={Map} options={{title: 'Map',}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
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
