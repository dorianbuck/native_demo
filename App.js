import { StatusBar } from "expo-status-bar";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
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

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
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
