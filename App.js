import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { List } from 'react-native-paper';

const someData = {
  data: [
    { name: "Dorian", role: "Student" },
    { name: "Loui", role: "Son" },
    { name: "Someone", role: "Student" },
  ],
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text>List of people</Text>
      <FlatList
        data={someData.data}
        renderItem={({ item }) => {
          return (
            <List.Item>
              `{item.name} is a {item.role}`
            </List.Item>
          );
        }}
        keyExtractor={( item ) => item.name}
      />
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
