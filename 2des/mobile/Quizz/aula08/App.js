import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './source/screen/home';
import Perguntas from './source/screen/Perguntas';

export default function App() {
  return (
    // Navigator é um comando que é te permite navegar entre telas
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerTransparent: true }}
        />
      </Stack.Navigator> */}

      <Stack.Navigator>
        <Stack.Screen
          name="Quiz"
          component={Perguntas}
          options={{title:"", headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
