// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/screens/HomeScreen';
import {FullImageScreen} from './src/screens/FullImageScreen';
import store from './src/store/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Navigator>
          <Stack.Screen name="Unsplash Gallery" component={HomeScreen} />
          <Stack.Screen
            name="FullImageScreen"
            component={FullImageScreen}
            options={{ title: 'Full Image' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
