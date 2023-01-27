import 'react-native-gesture-handler';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={Home}
          name='Home'
          options={{
            headerTitle: () => <Header name="Notes" />,
            headerStyle: {
              backgroundColor:'#4c00b0',
              height:120,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

