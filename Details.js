import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph} from "react-native-paper";
import logo from './assets/logo.png'
const detailedInfo = {
  data: [{ name: "Dorian Buck", age: 42, role: "father", interest: "biggens" }],
};

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Text style={{color: '#888', fontSize: 18}}>Details</Text>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'grey' }}>
        <Text style={{ fontSize: 20, color: '#fff', Padding: 20, borderRadious: 5 }}>Click me!</Text>
      </TouchableOpacity>
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
