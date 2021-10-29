import { registerRootComponent } from "expo";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import App from "./App";

const Main = () => {
  return (
    <NavigationContainer>
      {
        <PaperProvider>
          <App />
        </PaperProvider>
      }
    </NavigationContainer>
  );
};

registerRootComponent(Main);


