import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const someData = {
  data: [
    { name: "Dorian", role: "Student" },
    { name: "Loui", role: "Son" },
    { name: "Pampa", role: "pappa" },
    { name: "Mampa", role: "mamma" },
    { name: "Someone", role: "anyone" },
  ],
};

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
      <Text>List of people</Text>
      <FlatList
        data={someData.data}
        renderItem={({ item }) => {
          return (
            <Card>
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.role}</Paragraph>
              </Card.Content>
            </Card>
          );
        }}
        keyExtractor={(item) => item.name}
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
