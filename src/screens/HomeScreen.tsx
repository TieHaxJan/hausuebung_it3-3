import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 20,
        }}
      >
        Welcome to the App
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#555',
          marginBottom: 40,
          textAlign: 'center',
          paddingHorizontal: 20,
        }}
      >
        Explore the features of this app. Start by navigating to the Todo List.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Todo')}
        style={{
          backgroundColor: '#007BFF',
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
          Go to Todo List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
