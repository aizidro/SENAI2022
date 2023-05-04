import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ead from './screen/ead'
import home from './screen/home'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="home"
        component={home}
        options={{title:"Página Inicial"}} />
        <Stack.Screen
          name="ead"
          component={ead}
          options={{ title: 'Lista de Clientes' }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}