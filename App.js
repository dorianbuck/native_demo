import { StatusBar } from "expo-status-bar";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
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
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 300 }}
        />
        <Text>List of people</Text>
      <FlatList
        style={{ flexDirection: "row",
        flexWrap: "wrap", }}
        data={someData.data}
        renderItem={({ item }) => {
          return (
            <Card>
              <Card.Content>
                <Title onPress={() => navigation.navigate("Details")}>{item.name}</Title>
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
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "left",
  },
});
