import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar"; 
import { StyleSheet, Text, View } from "react-native";
import { RecoilRoot } from "recoil";
import { NavigationContainer} from "@react-navigation/native";
// import Navbar from "./views/Navbar";
import Screen1 from "./views/Screen1";
import Screen2 from "./views/Screen2";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (  
      <RecoilRoot>
        {/* <Navbar /> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="S1">
            <Stack.Screen name="S1" component={Screen1}
            options={{
              title: 'Wallpapers',
              // headerStyle:{
              //   backgroundColor: '#42f5b0'
              // },
              // headerTintColor: '#fff',
              headerTitleStyle:{
              fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
            }}
            />

            <Stack.Screen name="S2" component={Screen2}
            options={{
              title: 'Back',
              headerStyle:{
                backgroundColor: '#000000',
              },
                headerTintColor: '#fff',
                headerTitleStyle:{
                fontWeight: 'bold'
                },
                // headerTitleAlign: 'center'
              
            }}
            />

          </Stack.Navigator>
        </NavigationContainer>
        {/* <Screen1 />   */}
      </RecoilRoot>  

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
    width: "100%",
    height: "100%",
    // backgroundColor: "yellow",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
