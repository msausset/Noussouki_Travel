import Connection from "./components/Connection";
import ConnectionGuest from "./components/ConnectionGuest";
import Inscription from "./components/Inscription";
import Home from "./components/Home";
import ConnectedHome from "./components/ConnectedHome";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "NOUSSOUKI TRA",
            headerStyle: {
              backgroundColor: "#3290D1",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
            },
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="INSCRIPTION"
          component={Inscription}
          options={{
            headerStyle: {
              backgroundColor: "#3290D1",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
            },
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SE CONNECTER"
          component={Connection}
          options={{
            headerStyle: {
              backgroundColor: "#3290D1",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
            },
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SE CONNECTER EN TANT QU'INVITÉ"
          component={ConnectedHome}
          options={{
            title: "ACCUEIL",
            headerStyle: {
              backgroundColor: "#3290D1",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
            },
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ACCUEIL"
          component={ConnectedHome}
          options={{
            headerStyle: {
              backgroundColor: "#3290D1",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
            },
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
