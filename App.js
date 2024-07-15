import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {Colors} from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {

  // const navigation = useNavigation();

  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500
          },
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700
          }
        }}>
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
                />,
                title: 'All Places'
              })
            }
          />
          <Stack.Screen
            name='AddPlace'
            component={AddPlace}
            options={{
              title: 'Add A New Place'
            }}
          />
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
