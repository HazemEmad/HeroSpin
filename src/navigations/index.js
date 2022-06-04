import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import MovieDetails from '../screens/movie-details';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
