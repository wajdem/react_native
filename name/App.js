import 'react-native-gesture-handler'
// import { StyleSheet, Text, View } from 'react-native';
// import {SimpleLineIcons,MaterialIcons,MaterialComunityIcons,FontAwesome} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./screens/HomeScreen";
import Exercise1 from "./screens/Exercise1";
import Exercise2 from "./screens/Exercise2";
import Exercise3 from "./screens/Exercise3";
import Exercise4 from "./screens/Exercise4";
import Exercise5 from "./screens/Exercise5";
import Exercise6 from "./screens/Exercise6";
import Exercise7 from "./screens/Exercise7";
import Exercise8 from "./screens/Exercise5";
import Exercise9 from "./screens/Exercise9";
import Exercise10 from "./screens/Exercise10";
import Exercise11 from "./screens/Exercise11";
import Exercise12 from "./screens/Exercise12";
import Profile from "./screens/Profile";
// import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drowerStyle:{
          backgroundColor: "#fff ",
          width:300,
        },
        headerStyle:{
          backgroundColor: "#000",
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight: "bold",
        },
        drawerActiveTintColor:"blue",
        drawerLabelStyle:{
          color:"#000",
        }
      }}
      >
        <Drawer.Screen name='home' options={{
          drawerLabel:"Home",
          title:"Home"
        }} component={HomeScreen} />
        <Drawer.Screen name='Exercise 1' options={{
          drawerLabel:"Exercise 1",
          title:"Exercise 1"
        }} component={Exercise1} />
        <Drawer.Screen name='Exercise 2' options={{
          drawerLabel:"Exercise 2",
          title:"Exercise 2"
        }} component={Exercise2} />
        <Drawer.Screen name='Exercise 3' options={{
          drawerLabel:"Exercise 3",
          title:"Exercise 3"
        }} component={Exercise3} />
        <Drawer.Screen name='Exercise 4' options={{
          drawerLabel:"Exercise 4",
          title:"Exercise 4"
        }} component={Exercise4} />
        <Drawer.Screen name='Exercise 5' options={{
          drawerLabel:"Exercise 5",
          title:"Exercise 5"
        }} component={Exercise5} />
        <Drawer.Screen name='Exercise 6' options={{
          drawerLabel:"Exercise 6",
          title:"Exercise 6"
        }} component={Exercise6} />
        <Drawer.Screen name='Exercise 7' options={{
          drawerLabel:"Exercise 7",
          title:"Exercise 7"
        }} component={Exercise7} />
        <Drawer.Screen name='Exercise 8' options={{
          drawerLabel:"Exercise 8",
          title:"Exercise 8"
        }} component={Exercise8} />
        <Drawer.Screen name='Exercise 9' options={{
          drawerLabel:"Exercise 9",
          title:"Exercise 9"
        }} component={Exercise9} />
        <Drawer.Screen name='Exercise 10' options={{
          drawerLabel:"Exercise 10",
          title:"Exercise 10"
        }} component={Exercise10} />
        <Drawer.Screen name='Exercise 11' options={{
          drawerLabel:"Exercise 11",
          title:"Exercise 11"
        }} component={Exercise11} />
        <Drawer.Screen name='Exercise 12' options={{
          drawerLabel:"Exercise 12",
          title:"Exercise 12"
        }} component={Exercise12} />
        <Drawer.Screen
          name='Profile'
          options={{
            drawerLabel: 'Profile', // Optional, if you want to display it in the drawer
          }}
          component={Profile} // Make sure to import the correct Profile screen component
        />
        <Drawer.Screen name="Profileee" component={Profile} />
      </Drawer.Navigator>
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



// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{color:"#ffff"}}>hi wajde mosbah</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding:"10px",
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:"black",
//   },
// });

