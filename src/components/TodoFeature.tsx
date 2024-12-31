import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity}  from 'react-native';
import CheckBox from 'expo-checkbox';
import {Task} from '../stores/todoStore';
import useTodoStore from '../stores/todoStore';

const tempList: Task[] = [];
const tempValue = 'temp';

const TodoFeature = () => {
  //Aufgabe 1: Verwendet einen State um die List mit allen Aufgaben zu speichern und ob diese ausgewählt sind. (tasks, setTasks)
  //Aufgabe 1: Verwendet einen State um die aktuelle Nutzereingabe zu speichern (task, setTask)
  //Aufgabe 1: Verwende einen State um jeder Aufgabe eine eindeutige ID zu geben.

  //Aufgabe 3: Verwendet den Todo Store.
  //Hinweis: Schaut euch die Datei 'src/stores/todoStore.tsx' an um ein besseres Verständnis dafür zu bekommen die dieser funktioniert.
  //Hinweis: Der State mit der Liste alle Aufgaben sollte zu einem Kommentar gemacht werden.

  //Aufgabe 1: Methode um eine Aufgabe in die Liste hinzuzufügen.
  //Hinweis: Verwendet für selected 'false' als initialen Wert. Setzt die aktuelle Nutzereingabe zurück und erhöht den ID counter um 1.
  //Aufgabe 3: Verändere diese Methode, um den Zustand Speicher zu verwenden.
  const addTask = () => {

  };

  //Aufgabe 1: Methode um eine Aufgabe aus der Liste zu entfernen.
  //Aufgabe 2: Verändere die Methode um alle ausgewählten Aufgaben zu löschen.
  //Hinweis zu 2: Es macht Sinn eine Fallunterscheidung hinzuzufügen, wenn man eine Id hat oder keine Id und je nachdem alle ausgewählten löscht oder per Id löscht
  //Aufgabe 3: Verändere diese Methode, um den Zustand Speicher zu verwenden.
  const deleteTask = (id?: number) => {

  };

  //Aufgabe 2: updatet den selected state für die angewählte Aufgabe.
  //Aufgabe 3: Mach diese Methode zu einem Kommentar
  const toggleTaskSelection = (id: number) => {
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Todo List
      </Text>
      <View style={{ marginBottom: 20 }}>
        {/*Aufgabe 1: Fügt hier die richtige Methode zum onChangeText Event hinzu und 
        setzte den aktuellen Wert auf den dafür verwendeten State. */}
        <TextInput
          value={tempValue}
          onChangeText={() => {}}
          placeholder="Enter a task"
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            backgroundColor: '#f9f9f9',
          }}
        />
        {/*Aufgabe 1: Fügt hier die richtige Methode zum onPress Event hinzu*/}
        <Button title="Add Task" onPress={() => {}} color="#007BFF" />
      </View>
      {/*Aufgabe 1: Setze das data Attribut auf die aktuelle List mit Aufgaben */}
      <FlatList
        data={tempList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/*Aufgabe 2: Fügt hier die richtige Methode zum onValueChange Event hinzu */}
              <CheckBox
                value={item.selected}
                onValueChange={() => {}}
              />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.text}</Text>
                {/*Aufgabe 1: Fügt hier die richtige Methode zum onPress Event hinzu */}
                <TouchableOpacity onPress={() => {}}>
                  <Text style={{ color: 'red' }}>Delete</Text>
                </TouchableOpacity>
            
            </View>
          </View>
        )}
      />
      {/* Aufgabe 2: Fügt hier die richtige Methode zum onPress Event hinzu */}
      <Button
        title="Delete Selected Tasks"
        onPress={() => {}}
        color="#FF0000"
      />
    </View>
  );
};

export default TodoFeature;
