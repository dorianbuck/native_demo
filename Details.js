import React from "react";
import { Text, View, FlatList } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const detailedInfo = {
  data: [{ name: "Dorian Buck", age: 42, role: "father", interest: "biggens" }],
};

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details</Text>
      <FlatList
        data={detailedInfo.data}
        renderItem={({ item }) => {
          return (
            <Card>
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.age}</Paragraph>
                <Paragraph>{item.role}</Paragraph>
                <Paragraph>{item.interest}</Paragraph>
              </Card.Content>
            </Card>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default DetailsScreen;
