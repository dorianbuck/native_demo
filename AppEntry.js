import { registerRootComponent } from "expo";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import DetailsScreen from "./Details";
import App from "./App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="Home">
            <Stack.Screen name="Home" component={App} options={{ title: 'Home' }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Deets' }} />
          </Stack.Navigator>
        </NavigationContainer>
        
      </PaperProvider>
    </>
  );
};

registerRootComponent(Main);
