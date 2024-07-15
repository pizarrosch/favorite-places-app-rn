import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {

  // const navigation = useNavigation();

  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({navigation}) =>
              ({
                headerRight: ({tintColor}) => <
                  IconButton
                  icon='add'
                  color={tintColor}
                  size={28}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              })
            }
          />
          <Stack.Screen name='AddPlace' component={AddPlace}/>
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
